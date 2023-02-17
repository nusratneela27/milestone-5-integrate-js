function getTextElementValueById(elementId){
    const totalElement = document.getElementById(elementId);
    const totalElementString = totalElement.innerText;
    const currentTotalElement = parseInt(totalElementString);
    return currentTotalElement;
}

function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
     subTotalElement.innerText = value;
}

function calculateSubTotal(){
     // calculate Total
     const currentTotalPhone = getTextElementValueById('phone-total');
     const currentTotalCase = getTextElementValueById('case-total');
     
     const currentSubTotal = currentTotalPhone + currentTotalCase;
     setTextElementValueById('sub-total', currentSubTotal);

    //  calculate Tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);

}
