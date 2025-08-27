console.log(544545);

// show ht cash out form

document.getElementById('btn-show-cash-out').addEventListener('click',function(){
    document.getElementById('cast-out-form').classList.remove('hidden')
    document.getElementById('add-money-form').classList.add('hidden')
})
document.getElementById('btn-show-add-money').addEventListener('click',function(){
    document.getElementById('cast-out-form').classList.add('hidden')
    document.getElementById('add-money-form').classList.remove('hidden')
})

document.getElementById('log-out').addEventListener('click',function(){
    window.location.href='index.html'
})