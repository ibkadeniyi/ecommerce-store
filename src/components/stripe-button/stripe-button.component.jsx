import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';

const StripeCheckOutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_LRDD5oDCVadpIyJQeHQr8ki4';

    const onToken = (token) => {
        console.log(token);
        alert('payment was successful');
    };

    return (
        <StripeCheckOut 
            label = 'Pay Now'
            name = 'Ecommerce Store'
            billingAddress
            shippingAddress
            discription ={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
};

export default StripeCheckOutButton;
