$(function() {
  // Init
  var iframe = $('#player1')[0]
  var player = $f(iframe)
  player.addEvent('ready', function() {
    player.addEvent('playProgress', onPlayProgress)
  })
})

// Listeners

var videoIsShown = false
function onPlayProgress(data) {
  console.log(data)
  if (!videoIsShown) {
    $(".hero__video").delay(5000).addClass("-visible")
    videoIsShown = true
  }
}
