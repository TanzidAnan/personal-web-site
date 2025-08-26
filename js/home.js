document.getElementById('btn-add-mony').addEventListener('click',function(event){
    // prevent page reload after form submit
    event.preventDefault();

    const addInputMoney =document.getElementById('add-money-input').value;
    const addPinNumber =document.getElementById('add-pin-input').value;
    
    const addMoneyNumber =parseFloat(addInputMoney);

    if(addPinNumber === '1234'){
        console.log('adding money to your account');
        const balance =document.getElementById('account-balance').innerText;

        const balanceNumber =parseFloat(balance);


        const newBalance = balanceNumber +addMoneyNumber;
        console.log(newBalance);
        // update the balance
        document.getElementById('account-balance').innerText =newBalance
    }
    else{
        alert('Failed to add money! please try again')
    }



    // console.log(6465)

})