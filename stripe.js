const stripe = Stripe("YOUR_PUBLISHABLE_KEY_HERE"); // Skiptu út fyrir Stripe lykilinn þinn

const paymentRequest = stripe.paymentRequest({
  country: 'IS',
  currency: 'isk',
  total: {
    label: 'Bambus tannbursti',
    amount: 1490,
  },
  requestPayerName: true,
  requestPayerEmail: true,
});

const elements = stripe.elements();
const prButton = elements.create('paymentRequestButton', {
  paymentRequest: paymentRequest,
});

paymentRequest.canMakePayment().then(function(result) {
  if (result) {
    prButton.mount('#payment-request-button');
  } else {
    document.getElementById('payment-request-button').style.display = 'none';
  }
});
