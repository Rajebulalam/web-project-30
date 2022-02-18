// Get Input Value
function getInputValue(inputId){

    const inputField = document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputFieldFloat = parseFloat(inputFieldText);
    const inputFieldValue = inputFieldFloat;
    inputField.value ='';
    return inputFieldValue;

}

// Update Balance Value
function updateBalance(fieldId, amount){

    const balanceUpdate = document.getElementById(fieldId);
    const balanceUpdateText = balanceUpdate.innerText;
    const balanceUpdateFloat = parseFloat(balanceUpdateText);
    const balanceUpdateVlaue = balanceUpdateFloat + amount;
    if(amount > 0){
        balanceUpdate.innerText = balanceUpdateVlaue;
    }else if(amount < 0){
        alert("Input Value Can't Be Negative");
    }else if(typeof amount != "string"){
        alert('Please!! Give Only Number');
    }

}

// Update Total Balance
function totalBalance(amount, isAdd){

    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceFloat = parseFloat(totalBalanceText);
    if(amount > 0){
        if(isAdd == true){
            const totalBalanceValue = totalBalanceFloat + amount;
            totalBalance.innerText = totalBalanceValue;
        }else{
            if(totalBalanceFloat >= amount){
                const totalBalanceValue = totalBalanceFloat - amount;
                totalBalance.innerText = totalBalanceValue;
            }else{
                alert("You Can't Withdraw More What You Have");
            }
        }
    }
}

// Deposit Event Handler
document.getElementById('deposit-btn').addEventListener('click', function(){

    // Deposit Input Value
    const depositInput = getInputValue('deposit-input');

    // Balance Update Value
    updateBalance('deposit-total', depositInput);

    // Total Balance Value
    totalBalance(depositInput, true);
})


// Widthdraw Event Value
document.getElementById('withdraw-btn').addEventListener('click', function(){

    // Withdraw Input Value
    const withdrawInput = getInputValue('withdraw-input');

    // Balance Update Value
    updateBalance('withdraw-total', withdrawInput);

    // Total Balance Value
    totalBalance(withdrawInput, false);

})