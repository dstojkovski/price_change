paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: getTotalCartAmount().toString(), // Function to get total cart amount
                    currency: 'USD'
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            alert('Transaction completed by ' + details.payer.name.given_name);
        });
    }
}).render('#paypal-button-container');

function getTotalCartAmount() {
    let totalAmount = 0;
    cart.forEach(item => {
        totalAmount += item.price;
    });
    return totalAmount;
}