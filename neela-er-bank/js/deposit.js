// ------deposit--------
document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    depositField.value = '';

    const dipositTotalElement = document.getElementById('diposit-total');
    const previousDepositString = dipositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositString);

    const newDepositAmountTotal = newDepositAmount + previousDepositTotal;
    dipositTotalElement.innerText = newDepositAmountTotal;

    // ----------balance--------
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceString);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})