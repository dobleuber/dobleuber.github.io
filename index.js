/**
 * Optional progressive enhancement. All résumé content lives in index.html
 * and is fully readable without this script.
 *  - Reveals the "Print résumé" button (browser print still works without it).
 *  - Marks the nav link for the section currently in view.
 */
(function () {
  'use strict'

  var printButton = document.querySelector('[data-print]')
  if (printButton && typeof window.print === 'function') {
    printButton.hidden = false
    printButton.addEventListener('click', function () {
      window.print()
    })
  }

  if (!('IntersectionObserver' in window)) return

  var links = Array.prototype.slice.call(document.querySelectorAll('.sitenav a[href^="#"]'))
  var byId = {}
  links.forEach(function (link) {
    byId[link.getAttribute('href').slice(1)] = link
  })

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return
      links.forEach(function (link) { link.removeAttribute('aria-current') })
      var active = byId[entry.target.id]
      if (active) active.setAttribute('aria-current', 'true')
    })
  }, { rootMargin: '-35% 0px -60% 0px' })

  Object.keys(byId).forEach(function (id) {
    var section = document.getElementById(id)
    if (section) observer.observe(section)
  })
})()
