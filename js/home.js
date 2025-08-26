
/**
1. add event listener to the add money button ( Torm submit)
make sure to preventDefault so that page doesn't reloads
2. get the money user wants to add
also, get the pin number provided
3. verify the pin number. for, wrong pin number ==> failed to add
for right pin number, allow to add the number to the account balance
4. get the current balance
5. add money to be added with the current balance
6. display/update the balance in the DOM/UI
 * */ 

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