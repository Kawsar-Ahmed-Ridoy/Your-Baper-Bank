document.getElementById('diposit-btn').addEventListener('click', function(){
   //diposit amount input value
    const dipositAmountField = document.getElementById('diposit-field');
    const dipositFieldValue = dipositAmountField.value;
    const dipositFieldValueString = parseFloat(dipositFieldValue);
    //clear input field
    dipositAmountField.value = '';

    if(dipositFieldValueString < 10){
        alert("Minimum 10 Taka joma dee! Taka na thakle abar churi korte ja!")
        return;
    };
    if(isNaN(dipositFieldValueString)){
        alert("please input a valid number")
        return;
    };

    //diposit amount element value 
    const dipositAmountElement = document.getElementById('diposit-count');
    const previousDepositTotalString = dipositAmountElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //add number to set the total diposit by input & element total value
    const currentDepositTotal = previousDepositTotal + dipositFieldValueString;
    dipositAmountElement.innerText = currentDepositTotal

    //ballance amount element value
    const ballanceAmountElement = document.getElementById('ballance-count');
    const previousBallanceTotalString = ballanceAmountElement.innerText;
    const previousBallanceTotal = parseFloat(previousBallanceTotalString);
    //calculate current total balance
    const currentBallanceTotal = previousBallanceTotal + currentDepositTotal;
    ballanceAmountElement.innerText = currentBallanceTotal;

});

