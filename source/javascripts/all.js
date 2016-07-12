$(function() {
  // Init
  var iframe = $('#player1')[0]
  var player = $f(iframe)

  // // Stripe init
  // var handler = StripeCheckout.configure({
  //   key: 'pk_test_jLS9nbug24AGz4aGzQSReQQT',
  //   image: '/img/documentation/checkout/marketplace.png',
  //   locale: 'auto',
  //   token: function(token) {
  //     // You can access the token ID with `token.id`.
  //     // Get the token ID to your server-side code for use.
  //     $(".hero__button").hide()
  //     $(".hero__confirmation").addClass("-visible")
  //     $(".hero__confirmation-name").text(token.card.name)
  //     $(".hero__confirmation-email").text(token.email)
  //   }
  // });

  // Listeners
  player.addEvent('ready', function() {
    player.addEvent('playProgress', onPlayProgress)
  })

  // // Stripe listeners
  // $('#purchase-button').on('click', function(e) {
  //   // Open Checkout with further options:
  //   handler.open({
  //     name: 'Falcon Stock',
  //     description: 'Geelong aerial footage package',
  //     zipCode: true,
  //     currency: "aud",
  //     amount: 490000,
  //     billingAddress: true,
  //     image: "http://falconstock.com.au/images/falconstock-stripe-logo.png"
  //   });
  //   e.preventDefault();
  // });
  // // Close Checkout on page navigation:
  // $(window).on('popstate', function() {
  //   handler.close();
  // });

  drift.on('ready', function(api) {
    // interact with the api here
    $("#drift-launcher").on("click", function (event) {
      event.preventDefault()
      api.sidebar.open()
    })
  })
})

var videoIsShown = false
function onPlayProgress(data) {
  if (!videoIsShown) {
    $(".hero__video").delay(5000).addClass("-visible")
    videoIsShown = true
  }
}
