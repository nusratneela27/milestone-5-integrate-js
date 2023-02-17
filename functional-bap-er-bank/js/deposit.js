document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldById('deposit-field');

    const previousTotal = getTextElementValueById('diposit-total');

    const newDepositTotal = previousTotal + newDepositAmount;
    setTextElementValueById('diposit-total', newDepositTotal);

    // ------balance------
    
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})