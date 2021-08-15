// handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input')
    const newDeposittext = depositInput.value;
    const newDepositAmount = parseFloat(newDeposittext)
    // console.log(depositAmount)


    // update deposit total
    const depositTotal = document.getElementById("deposit-total");
    const perviousDeposittext = depositTotal.innerText;
    const perviousDepositAmount = parseFloat(perviousDeposittext);
    
    const newDepositTotal = perviousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;


    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    perviousBalanceTotal = parseFloat(balanceTotalText)
    const newBalanceTotal = perviousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;


    //  clear the input feild 
    depositInput.value = ''
});


//  handle withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount)


    // set withdraw totoal
    const withdrawTotoal = document.getElementById('withdraw-total');
    const perviousWithdrawText = withdrawTotoal.innerText;
    perviousWithdrawTotal = parseFloat(perviousWithdrawText);
    const newWithdrawTotal = perviousWithdrawTotal + newWithdrawAmount;
    withdrawTotoal.innerText = newWithdrawTotal;



    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const perviousBalanceText = balanceTotal.innerText;
    const perviousBalanceTotal = parseFloat(perviousBalanceText);
    const newBalanceTotal = perviousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal; 


    // clear input
    withdrawInput.value = '';
})
