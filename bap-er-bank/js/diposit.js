//  step-1 add event listener to the diposit button
document.getElementById('btn-deposit').addEventListener('click', function(){

    // step-2: get the diposit amount from the diposit  input field
    // for input field use .value to the value inside the input field
    const dipositField = document.getElementById('deposit-field');
    const newDipositAmountString = dipositField.value;
    const newDipositAmount = parseFloat(newDipositAmountString);

    // step-3: get current deposit total
    // for non-input (element other than input, text area) use innerText to get the test
    const dipositTotalElement = document.getElementById('diposit-total');
    const previousDipositTotalString = dipositTotalElement.innerText;
    const previousDipositTotal = parseFloat(previousDipositTotalString);

    // step-4 add numbers to set the total deposit
    const currentDepositAmount = previousDipositTotal + newDipositAmount;
    // set the deposit total
    dipositTotalElement.innerText = currentDepositAmount;

    // step-5: get balaance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotl = parseFloat(previousBalanceTotalString);

    // step-6: claculate current total balance
    const currentBalanceAmount = previousBalanceTotl + newDipositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceAmount;
    
    // step-7: clear the deposit field
    dipositField.value= '';
})