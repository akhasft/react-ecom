import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripCheckoutButton({ price }) {
  const priceForStrpe = price * 100;
  const publishableKey = "pk_test_HOU2FZoWLyQclA1TYTGka3Rg00VVE5D3HX";

  const onToken = (token) => {
    console.log(token);
    alert("payment success");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="AWE Store"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`your Total is $${price}`}
      amount={priceForStrpe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripCheckoutButton;
