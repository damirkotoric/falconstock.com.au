$(function() {
  // Init
  var iframe = $('#player1')[0]
  var player = $f(iframe)

  // Listeners
  player.addEvent('ready', function() {
    player.addEvent('playProgress', onPlayProgress)
  })
  $("#mc-embedded-subscribe-form").on("submit", formSubmitting)
})

var videoIsShown = false
function onPlayProgress(data) {
  console.log(data)
  if (!videoIsShown) {
    $(".hero__video").delay(5000).addClass("-visible")
    videoIsShown = true
  }
}

function formSubmitting(event) {
  $emailInput = $("#mce-EMAIL")
  if (!$emailInput.val()) {
    event.preventDefault()
    $emailInput.focus()
  }
}
