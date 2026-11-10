/**
 * Optional progressive enhancement. All résumé content lives in index.html
 * and is fully readable without this script. It only reveals the
 * "Print résumé" button; browser print still works without it.
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
})()
