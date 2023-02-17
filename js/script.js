// Default input value
document.getElementById('iphone-input').value = 0;
document.getElementById('case-input').value = 0;

// Single product items calculate
function singleProductTotal (quantityId, isIncrease, productPrice, priceId) {
    let productQuantity = document.getElementById(quantityId).value;

    if(isIncrease && productQuantity >= 0) {
        productQuantity = parseInt(productQuantity) + 1;
        document.getElementById(quantityId).value = productQuantity;
    }else if (productQuantity > 0) {
        productQuantity = parseInt(productQuantity) - 1;
        document.getElementById(quantityId).value = productQuantity;
    }

    const totalPrice = parseFloat(productPrice) * parseFloat(productQuantity);

    updateValue(priceId, totalPrice);
    setTotalPrice(0.1);
}

//Update value, Set inner text 
function updateValue (id, value) {
    document.getElementById(id).innerText = value;
}

// Calculate total shopping price
function setTotalPrice (taxParcentage) {
    const phoneTotalPrice = parseFloat(document.getElementById('iphone-price').innerText);
    const caseTotalPrice = parseFloat(document.getElementById('case-price').innerText);

    const subTotal = phoneTotalPrice + caseTotalPrice;
    const tax = (subTotal * taxParcentage).toFixed(2);
    const total = (subTotal + parseFloat(tax)).toFixed(2);
    parseFloat(total);

    updateValue('subtotal', subTotal);
    updateValue('tax', tax);
    updateValue('total', total);
}

// Hiding products
function hideItem (id) {
    document.getElementById(id).style.display = 'none';
}