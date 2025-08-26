document.getElementById('btn-cast-out').addEventListener('click',function(event){
    event.preventDefault()

    const castOut =document.getElementById('add-cast-out').value;
    const castOutPin =document.getElementById('add-cast-out-pin').value;
    // console.log(castOut,castOutPin);
    const castOutNumber =parseFloat(castOut);

    if(castOutPin ==='1234'){
        console.log('money is reducing');
        const balance =document.getElementById('account-balance').innerText;
        const balanceNumber=parseFloat(balance);

        const newBalance =balanceNumber - castOutNumber;
        document.getElementById('account-balance').innerText=newBalance;
    }
    else{
        alert('Failed to cast out. please try again later')
    }

})