

document.getElementById('deposit-button').addEventListener('click', function(){
    const inputAmount = parseInt(document.getElementById('input-deposit').value);

    if (inputAmount < 1){
        return alert('Minimum Value 1')
    }

    const previousAmount = parseInt(document.getElementById('total-deposit').innerText);
    const totalDeposit = inputAmount + previousAmount ;
    document.getElementById('total-deposit').innerHTML = totalDeposit; 

    //Clear
    document.getElementById('input-deposit').value = '';

    let totalBalance = inputAmount + previousAmount;
    document.getElementById('total-balance').innerHTML = totalBalance; 
})



document.getElementById('withdraw-button').addEventListener('click', function(){
    const inputAmount = parseInt(document.getElementById('input-withdraw').value);

    if (inputAmount < 1){
        return alert('Minimum Value 1 ')
    }

    const previousAmount = parseInt(document.getElementById('total-withdraw').innerText);
    const totalWithdraw = previousAmount + inputAmount;
    document.getElementById('total-withdraw').innerHTML = totalWithdraw; 

    //Clear
    document.getElementById('input-withdraw').value = '';

    const previousBalance = document.getElementById('total-balance').innerText;
    const totalBalance = previousBalance - inputAmount;
    document.getElementById('total-balance').innerHTML = totalBalance; 
})