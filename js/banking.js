document.getElementById("deposit-button").addEventListener("click", function () {
    const inputField = document.getElementById("input-deposit");
    const inputTaxt = inputField.value

    const inputAmount = parseInt(inputTaxt);


    if (inputField.value == "") {
        return alert("valo hou")
    }


    if (inputAmount < 1) {
        return alert("minimum value is 1")
    }


    const totalDepositinput = document.getElementById("total-deposit");
    const totalDepositText = totalDepositinput.innerText
    const Deposit = parseInt(totalDepositText);
    const newDeposit = Deposit + inputAmount;
    totalDepositinput.innerText = newDeposit;
    //total-balance



    const balanceField = document.getElementById("balance-input");
    
    const balanceText = balanceField.innerText;
    const previousBalance = parseInt(balanceText);

    const totalBalance = previousBalance + inputAmount;
    balanceField.innerText = totalBalance;

    //clear

    inputField.value = " "






})