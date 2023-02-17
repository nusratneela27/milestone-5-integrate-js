document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldById('withdraw-field');

    const previousWithdrawTotal = getTextElementValueById('withdraw-total');

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);

    // ------- balance------
    
    const PreviousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = PreviousBalanceTotal - newWithdrawTotal;
    setTextElementValueById('balance-total', newBalanceTotal)
})