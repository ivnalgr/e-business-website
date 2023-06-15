simplecart ( {
    cartstyle: "table"
} );

simplecart ( { 
    cartstyle: "table",
    currency: "AUD",
    shippingFlatRate: 5.95,
    shippingQuantityRate:1.00,
    taxRate:0.1,
});

cartColumns: [
    {view: function(item, column) {
        return"<img src='" + item.get ('image') + "' class='product_image_thumbnail'>";
    },
    attr:"image",label:"Product Image"},
    {attr:"name",label:"Name"},
    {attr:"size",label:"Size"},
    {view:"currency",attr:"price",label:"Price"},
    {view:"decrement",label:false},
    {attr:"quantity",label:"Qty"},
    {view:"increment",label:false},
    {view:"currency",attr:"total",label:"SubTotal"},
    {view:"remove",text:"Remove",label:false}
];

checkout:{
    type:"SendForm"
    method:"POST",
    url; "http://saturn.csit.rmit.edu.au/∼e46281/inte2047/processFormData.php"
};

simpleCart.bind('beforeCheckout',function(data){
    data.first_name=document.getElementById("fname").value;
    data.last_name=document.getElementById("lname").value;
    data.phone_number=document.getElementById("phone_number").value;
    ata.email_address=document.getElementById("email_address").value;
    data.address_street_1=document.getElementById("address_street_1").value;
    data.address_street_2=document.getElementById("address_street_2").value;
    data.city= document.getElementById("address_city").value;
    data.state=document.getElementById("address_state_province").value;
    data.postcode=document.getElementById("postal_code").value;
    data.country=document.getElementById("country").value;

    data.cc_mastercard=document.getElementById("cc_mastercard").checked;
    data.cc_visa=document.getElementById("cc_visa").checked;
    data.cc_amex=document.getElementById("cc_amex").checked;
    
    data.ccname=document.getElementById("credit_card_name").value;
    data.ccname=document.getElementById("credit_card_name").value;
    data.ccnumber=document.getElementById("credit_card_number").value;
    data.ccsecuritycode=document.getElementById("credit_card_security_code").value;
});
