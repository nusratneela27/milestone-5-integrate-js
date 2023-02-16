/* 
1. add event handlers with the withdraw button
2. get the withdraw amount from the withdraw input field
2-5. also make sure to convert the input into a number by using parseFloat
3. get previous withdraw total

4. calculate total withdraw amount
4-5. set total withdraw amount 

5. get the previous balnce total 
6. calculate new balance total
6-5. set the new balance total

7. clear the input field
*/

// step-1 
document.getElementById('btn-withdraw').addEventListener('click', function(){
   
    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithDrawtAmount = parseFloat(newWithdrawAmountString);
    
    // step-7
    withdrawField.value = '';
    
    if(isNaN(newWithDrawtAmount)){
        alert('please provide number');
        return;
    }
    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdeawTotalElement = withdrawTotalElement.innerText;
    const previousWithdeawTotal = parseFloat(previousWithdeawTotalElement);
   
    // step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    if(newWithDrawtAmount > previousBalanceTotal){
        alert('no money');
        return;
    }
        
    // step-4
    const currentWithDrawTotal = previousWithdeawTotal + newWithDrawtAmount;
    withdrawTotalElement.innerText = currentWithDrawTotal;    

    // step-6 
    const newBalanceTotal = previousBalanceTotal - newWithDrawtAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})