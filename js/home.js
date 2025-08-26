console.log(656565)

document.getElementById('btn-add-mony').addEventListener('click',function(event){
    // prevent page reload after form submit
    event.preventDefault();

    const addInputMoney =document.getElementById('add-money-input').value;
    const addPinNumber =document.getElementById('add-pin-input').value;
    console.log(addInputMoney,addPinNumber)


    // console.log(6465)

})