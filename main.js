const darkmode = document.getElementById('darkmode');
const money = document.getElementById('money');
const years = document.getElementById('years');
const body = document.getElementById('body');
const Total_Amount = document.getElementById('Total_Amount');
const alnateg = document.getElementById('alnateg');

darkmode.onclick = function(){

  body.style.transition = ' all 0.5s ease';
  body.style.color = '#fff';
  body.style.background = ' black';

}

alnateg.onclick = function(){

alert(money.value * 20 / 100 * years.value + money.value);

}
