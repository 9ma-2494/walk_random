let number = document.getElementById('span1')
let directions = document.getElementById('span2')
let button = document.getElementById('btn')
let roulette1 = ['1', '2', '3', '4', '5'];
let roulette2 = ['右', '左'];
button.addEventListener('click',function(){
    var get1 = Math.floor( Math.random() * 5 ) ;
    var get2 = Math.floor( Math.random() * 2 ) ;
    number.innerText = roulette1[get1];
    directions.innerText = roulette2[get2];
});