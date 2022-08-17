    //withdraw amount input value
document.getElementById('withdraw-btn').addEventListener('click', function (){
    //total ballance input value
    const withdrawAmountField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawAmountField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
     //clear input field
    withdrawAmountField.value = '';

    if(newWithdrawAmount < 10){
        alert("fokinni durr ho")
        return;
    }if(isNaN(newWithdrawAmount)){
        alert("please input a valid number")
        return;
    }

    //total ballance element value
    const withdrawAmounElement = document.getElementById("withdraw-count");
    const previousWithdrawTotalString = withdrawAmounElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)


    const ballanceTotalElement = document.getElementById("ballance-count");
    const previousBallanceTotalString = ballanceTotalElement.innerText;
    const previousBallanceTotal = parseFloat(previousBallanceTotalString);

    if(previousBallanceTotal < newWithdrawAmount){
        alert("tor baper eto Taka nai")
        return;
    }
        
    const withdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    withdrawAmounElement.innerText = withdrawTotal;

    const ballanceTotal = previousBallanceTotal - newWithdrawAmount;
    ballanceTotalElement.innerText = ballanceTotal;
   
    
})