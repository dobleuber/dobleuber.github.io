/**
 * Optional progressive enhancement. All résumé content lives in index.html
 * and is fully readable without this script. Everything added here is
 * decorative, aria-hidden and pointer-transparent:
 *   - "Print résumé" button reveal
 *   - first-visit intro (name decipher, portrait sweep, grid pulses), all
 *     finished within ~4.5 s and skipped under reduced motion
 *   - portrait tilt on fine pointers
 *   - experience timeline rail that fills while scrolling
 * The system reduced-motion setting is honored live.
 */
(function () {
  'use strict'

  var doc = document
  var win = window

  var printButton = doc.querySelector('[data-print]')
  if (printButton && typeof win.print === 'function') {
    printButton.hidden = false
    printButton.addEventListener('click', function () {
      win.print()
    })
  }

  /* ---------- Helpers ---------- */
  function media (query) {
    return win.matchMedia ? win.matchMedia(query) : null
  }

  function matches (list) {
    return !!(list && list.matches)
  }

  function watch (list, fn) {
    if (!list) return
    if (list.addEventListener) list.addEventListener('change', fn)
    else if (list.addListener) list.addListener(fn)
  }

  var reduceMotion = media('(prefers-reduced-motion: reduce)')
  var forcedColors = media('(forced-colors: active)')
  var finePointer = media('(hover: hover) and (pointer: fine)')

  function calm () {
    return matches(reduceMotion) || matches(forcedColors)
  }

  function now () {
    return win.performance && win.performance.now ? win.performance.now() : Date.now()
  }

  var raf = win.requestAnimationFrame
    ? function (fn) { return win.requestAnimationFrame(fn) }
    : function (fn) { return win.setTimeout(fn, 16) }

  function clamp (value, min, max) {
    return Math.min(max, Math.max(min, value))
  }

  function decorative (tag, className) {
    var el = doc.createElement(tag)
    el.className = className
    el.setAttribute('aria-hidden', 'true')
    return el
  }

  /* Intro effects register a stop function; stopping is idempotent and
     restores the final static state synchronously. */
  var stoppers = []

  function addIntro (stop) {
    if (typeof stop === 'function') stoppers.push(stop)
  }

  function stopIntros () {
    var list = stoppers
    stoppers = []
    list.forEach(function (stop) { stop() })
  }

  /* ---------- Name decipher ---------- */
  var GLYPHS = 'ABCDEFGHJKLNOPRSTUVXYZ0123456789'

  function randomGlyph () {
    return GLYPHS.charAt(Math.floor(Math.random() * GLYPHS.length))
  }

  function decipherName () {
    var heading = doc.querySelector('.hero__name')
    if (!heading || !doc.createRange) return
    var words = heading.querySelectorAll('.hero__first, .hero__last')
    if (!words.length) return

    // Measure each rendered character so every overlay glyph sits in a fixed
    // slot: scrambled glyphs never shift their neighbours.
    var plans = []
    var range = doc.createRange()
    for (var w = 0; w < words.length; w++) {
      var node = words[w].firstChild
      if (!node || node.nodeType !== 3 || !node.data) return
      var origin = words[w].getBoundingClientRect()
      var slots = []
      for (var i = 0; i < node.data.length; i++) {
        range.setStart(node, i)
        range.setEnd(node, i + 1)
        var box = range.getBoundingClientRect()
        if (!box.width) return
        slots.push({ ch: node.data.charAt(i), left: box.left - origin.left })
      }
      plans.push({ word: words[w], slots: slots, delay: w * 150 })
    }

    var cells = []
    var overlays = plans.map(function (plan) {
      var overlay = decorative('span', 'decipher')
      plan.slots.forEach(function (slot, i) {
        var el = doc.createElement('span')
        el.className = 'decipher__ch is-scrambled' + (cells.length % 2 ? ' is-alt' : '')
        el.style.left = slot.left + 'px'
        el.textContent = randomGlyph()
        overlay.appendChild(el)
        cells.push({ el: el, ch: slot.ch, at: plan.delay + 250 + i * 90 + Math.random() * 60 })
      })
      plan.word.appendChild(overlay)
      return overlay
    })

    // Overlay is in place: only now conceal the underlying visual text.
    heading.classList.add('is-deciphering')

    var stopped = false
    var start = now()
    var lastSwap = 0

    function stop () {
      if (stopped) return
      stopped = true
      win.clearTimeout(backstop)
      heading.classList.remove('is-deciphering')
      overlays.forEach(function (overlay) {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay)
      })
    }

    function tick () {
      if (stopped) return
      var t = now() - start
      var swap = t - lastSwap > 45
      if (swap) lastSwap = t
      var pending = 0
      cells.forEach(function (cell) {
        if (cell.done) return
        if (t >= cell.at) {
          cell.done = true
          cell.el.textContent = cell.ch
          cell.el.className = 'decipher__ch is-locked'
        } else {
          pending++
          if (swap) cell.el.textContent = randomGlyph()
        }
      })
      if (pending) raf(tick)
      else win.setTimeout(stop, 320)
    }

    // Wall-clock backstop: restore the real text even if frames stall.
    var backstop = win.setTimeout(stop, 1500)
    raf(tick)
    return stop
  }

  /* ---------- Background grid pulses ---------- */
  function pulseGrid (hero) {
    if (typeof doc.body.animate !== 'function') return
    // The body grid repeats every 4rem from the document origin.
    var step = parseFloat(win.getComputedStyle(doc.documentElement).fontSize) * 4
    if (!(step > 0)) return

    var scrollY = win.pageYOffset || 0
    var width = doc.documentElement.clientWidth
    var height = Math.min(hero.getBoundingClientRect().bottom, win.innerHeight) + scrollY
    var length = step * 2
    var layer = decorative('div', 'grid-pulses')
    layer.style.height = height + 'px'

    var specs = [
      { axis: 'h', at: 0.22, delay: 200 },
      { axis: 'v', at: 0.9, delay: 700 },
      { axis: 'h', at: 0.6, delay: 1300, alt: true },
      { axis: 'v', at: 0.62, delay: 2000 },
      { axis: 'h', at: 0.86, delay: 2700 }
    ]

    var pulses = []
    specs.forEach(function (spec) {
      var horizontal = spec.axis === 'h'
      var span = horizontal ? height : width
      var line = Math.round((span * spec.at) / step) * step
      if (line <= 0 || line >= span) return
      var el = doc.createElement('i')
      el.className = 'grid-pulse grid-pulse--' + spec.axis + (spec.alt ? ' grid-pulse--alt' : '')
      el.style[horizontal ? 'top' : 'left'] = line + 'px'
      layer.appendChild(el)
      pulses.push({ el: el, spec: spec, travel: horizontal ? width : height })
    })
    if (!pulses.length) return

    doc.body.appendChild(layer)

    var animations = pulses.map(function (pulse) {
      var axis = pulse.spec.axis === 'h' ? 'translateX' : 'translateY'
      return pulse.el.animate([
        { transform: axis + '(' + -length + 'px)', opacity: 0 },
        { opacity: 1, offset: 0.2 },
        { opacity: 1, offset: 0.8 },
        { transform: axis + '(' + pulse.travel + 'px)', opacity: 0 }
      ], { duration: 1600, delay: pulse.spec.delay, easing: 'ease-in-out' })
    })

    var stopped = false
    function stop () {
      if (stopped) return
      stopped = true
      win.clearTimeout(timer)
      animations.forEach(function (animation) { animation.cancel() })
      if (layer.parentNode) layer.parentNode.removeChild(layer)
    }
    var timer = win.setTimeout(stop, 4500)
    return stop
  }

  /* ---------- Holographic portrait ---------- */
  function setupPortrait () {
    var figure = doc.querySelector('.hero__portrait')
    var frame = figure && figure.querySelector('.portrait-frame')
    if (!frame) return null

    var fx = decorative('span', 'portrait-fx')
    fx.innerHTML =
      '<span class="portrait-fx__beam"><span class="portrait-fx__sweep"></span></span>' +
      '<span class="portrait-fx__corner portrait-fx__corner--tl"></span>' +
      '<span class="portrait-fx__corner portrait-fx__corner--tr"></span>' +
      '<span class="portrait-fx__corner portrait-fx__corner--br"></span>' +
      '<span class="portrait-fx__corner portrait-fx__corner--bl"></span>'
    frame.appendChild(fx)

    var sweepTimer = 0
    var lastSweep = -Infinity

    function endSweep () {
      win.clearTimeout(sweepTimer)
      fx.classList.remove('is-sweeping')
    }

    function sweep () {
      if (calm() || fx.classList.contains('is-sweeping')) return
      lastSweep = now()
      fx.classList.add('is-sweeping')
      sweepTimer = win.setTimeout(endSweep, 1500)
    }

    // Very slight rigid tilt (max 2.5deg, no scale or skew) on fine pointers.
    var box = null
    var target = null
    var queued = false

    function applyTilt () {
      queued = false
      if (!target) return
      frame.classList.add('is-tilting')
      frame.style.setProperty('--tilt-x', (target.x * 5).toFixed(2) + 'deg')
      frame.style.setProperty('--tilt-y', (target.y * -5).toFixed(2) + 'deg')
      frame.style.setProperty('--glare-x', ((target.x + 0.5) * 100).toFixed(1) + '%')
      frame.style.setProperty('--glare-y', ((target.y + 0.5) * 100).toFixed(1) + '%')
    }

    function resetTilt () {
      target = null
      box = null
      frame.classList.remove('is-tilting')
    }

    function canTilt (event) {
      return !calm() && matches(finePointer) && event.pointerType !== 'touch'
    }

    // Untransformed frame box: the figure is never transformed, and offset*
    // values ignore the frame's own tilt transform.
    function frameBox () {
      var origin = figure.getBoundingClientRect()
      return {
        left: origin.left + frame.offsetLeft,
        top: origin.top + frame.offsetTop,
        width: frame.offsetWidth,
        height: frame.offsetHeight
      }
    }

    if (win.PointerEvent) {
      figure.addEventListener('pointerenter', function (event) {
        if (!canTilt(event)) return
        box = null
        if (now() - lastSweep > 4000) sweep()
      })
      figure.addEventListener('pointermove', function (event) {
        if (!canTilt(event)) return
        if (!box) box = frameBox()
        if (!box.width || !box.height) return
        target = {
          x: clamp((event.clientX - box.left) / box.width - 0.5, -0.5, 0.5),
          y: clamp((event.clientY - box.top) / box.height - 0.5, -0.5, 0.5)
        }
        if (!queued) {
          queued = true
          raf(applyTilt)
        }
      })
      figure.addEventListener('pointerleave', resetTilt)
      win.addEventListener('scroll', function () { box = null }, { passive: true })
      win.addEventListener('resize', resetTilt)
    }

    return { sweep: sweep, endSweep: endSweep, resetTilt: resetTilt }
  }

  /* ---------- Experience timeline ---------- */
  function setupTimeline () {
    var ledger = doc.querySelector('#experience .ledger')
    var body = ledger && ledger.parentNode
    var entries = ledger ? Array.prototype.slice.call(ledger.querySelectorAll('.entry')) : []
    if (!body || !entries.length) return null

    // The rail lives beside the <ol>, never inside it, to keep list semantics.
    var rail = decorative('div', 'ledger-rail')
    var fill = doc.createElement('span')
    fill.className = 'ledger-rail__fill'
    rail.appendChild(fill)
    body.classList.add('has-timeline')
    body.appendChild(rail)

    var visible = true
    var queued = false
    var nodeOffset = 0

    // Node position comes from CSS (--node-top); cache it, refresh on
    // resize and preference changes.
    function measureNode () {
      nodeOffset = parseFloat(win.getComputedStyle(entries[0], '::after').top) || 0
    }

    function update () {
      queued = false
      // Read everything first, then write.
      var still = calm()
      var railBox = rail.getBoundingClientRect()
      var progress = still || !railBox.height
        ? 1
        : clamp((win.innerHeight * 0.6 - railBox.top) / railBox.height, 0, 1)
      var reach = railBox.top + progress * railBox.height
      var tops = entries.map(function (entry) { return entry.getBoundingClientRect().top })

      fill.style.transform = 'scaleY(' + progress.toFixed(4) + ')'
      entries.forEach(function (entry, i) {
        entry.classList.toggle('is-reached', still || tops[i] + nodeOffset <= reach + 0.5)
      })
    }

    function schedule () {
      if (!visible || queued) return
      queued = true
      raf(update)
    }

    if (win.IntersectionObserver) {
      new win.IntersectionObserver(function (records) {
        visible = records[records.length - 1].isIntersecting
        schedule()
      }, { rootMargin: '25% 0px' }).observe(body)
    }
    function refresh () {
      measureNode()
      schedule()
    }

    win.addEventListener('scroll', schedule, { passive: true })
    win.addEventListener('resize', refresh)
    measureNode()
    update()
    return { refresh: refresh }
  }

  /* ---------- Wiring ---------- */
  var portrait = setupPortrait()
  var timeline = setupTimeline()

  function firstVisit () {
    try {
      if (win.sessionStorage.getItem('wc-intro')) return false
      win.sessionStorage.setItem('wc-intro', '1')
    } catch (error) {}
    return true
  }

  var hero = doc.querySelector('.hero')
  var hash = win.location.hash
  var heroBox = hero && hero.getBoundingClientRect()
  var playIntro = !!hero &&
    (!hash || hash === '#top' || hash === '#profile' || hash === '#main') &&
    !calm() &&
    doc.visibilityState !== 'hidden' &&
    heroBox.top < win.innerHeight &&
    heroBox.bottom > 0 &&
    firstVisit()

  if (playIntro) {
    addIntro(decipherName())
    addIntro(pulseGrid(hero))
    if (portrait) {
      var sweepDelay = win.setTimeout(portrait.sweep, 500)
      addIntro(function () {
        win.clearTimeout(sweepDelay)
        portrait.endSweep()
      })
    }
  }

  function settle () {
    stopIntros()
    if (portrait) {
      portrait.endSweep()
      portrait.resetTilt()
    }
  }

  function onPreferenceChange () {
    if (calm()) settle()
    if (timeline) timeline.refresh()
  }

  watch(reduceMotion, onPreferenceChange)
  watch(forcedColors, onPreferenceChange)
  watch(finePointer, function () {
    if (portrait) portrait.resetTilt()
  })

  doc.addEventListener('visibilitychange', function () {
    if (doc.visibilityState === 'hidden') settle()
  })
  win.addEventListener('beforeprint', settle)

  var lastWidth = win.innerWidth
  win.addEventListener('resize', function () {
    if (win.innerWidth === lastWidth) return
    lastWidth = win.innerWidth
    stopIntros()
  })
})()
