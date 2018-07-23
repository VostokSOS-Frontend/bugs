"strict mode";
// let adultAge = 18;
// const isAdult = confirm(`est ${adultAge}?`);
// alert(isAdult);

//  const age = +prompt('skolko let?');

//  if (age >= 18) {
//      alert('dobro pozhalovat');
//  } else if(age >= 7) {
//      alert(`idi v shkolu`);
//  } else if(age >=3) {
//      alert(`idi v sad`);
//  } else {
//      alert(`podrosti`);
//  }

// let temp = +prompt(`kakaya temperatura?`);

// if (temp >= 40 || temp < 35) {
//     alert('trup');
// } else if (temp >= 37) {
//     alert('bolen');
// } else if (temp >= 35) {
//     alert ('norm')
// }

// let month = +prompt('mesyac rozhdeniya?');
// let day = +prompt('data rozhdeniya?');

// if ((month == 3) && (day >=21 && day <= 31))   {
//     alert('oven');
// } else if ((month == 4) && (day >=1 && day <= 19))   {
//     alert('oven');
// } else if ((month == 4) && (day >=20 && day <= 31))   {
//     alert('telec');
// } else if ((month == 5) && (day >=1 && day <= 20))   {
//     alert('telec');
// } else if ((month == 5) && (day >=21 && day <= 31))   {
//     alert('blizneci');
// } else if ((month == 6) && (day >=1 && day <= 21))   {
//     alert('blizneci');
// } else if ((month == 6) && (day >=22 && day <= 31))   {
//     alert('rak');
// } else if ((month == 7) && (day >=1 && day <= 22))   {
//     alert('rak');
// } else if ((month == 7) && (day >=23 && day <= 31))   {
//     alert('lev');
// } else if ((month == 8) && (day >=1 && day <= 21))   {
//     alert('lev');
// } else if ((month == 8) && (day >=21 && day <= 31))   {
//     alert('deva');
// } else if ((month == 9) && (day >=1 && day <= 22))   {
//     alert('deva');
// } else if ((month == 9) && (day >=23 && day <= 31))   {
//     alert('vesi');
// } else if ((month == 10) && (day >=1 && day <= 23))   {
//     alert('vesi');
// } else if ((month == 10) && (day >=24 && day <= 31))   {
//     alert('scorpion');
// } else if ((month == 11) && (day >=1 && day <= 22))   {
//     alert('scorpion');
// } else if ((month == 11) && (day >=23 && day <= 31))   {
//     alert('strelec');
// } else if ((month == 12) && (day >=1 && day <= 21))   {
//     alert('strelec');
// } else if ((month == 12) && (day >=22 && day <= 31))   {
//     alert('kozerog');
// } else if ((month == 1) && (day >=1 && day <= 19))   {
//     alert('kozerog');
// } else if ((month == 1) && (day >=20 && day <= 31))   {
//     alert('vodoley');
// } else if ((month == 2) && (day >=1 && day <= 18))   {
//     alert('vodoley');
// } else if ((month == 2) && (day >=19 && day <= 31))   {
//     alert('ribi');
// } else if ((month == 3) && (day >=1 && day <= 20))   {
//     alert('ribi');
// } 

// let question1 = ('Как правильно закончить пословицу: «Не откладывай на завтра то, что можно…»? \n1. сделать сегодня \n2. сделать послезавтра \n3. сделать через месяц \n4. никогда не делать');

// let question2 = ('Что говорит человек, когда замечает нечто необычное?\n1. попало в лоб\n2.залетело в рот\n3. накапало в уши\n4. бросилось в глаза');

// let question3 = ('Как правильно закончить пословицу: «Не откладывай на завтра то, что можно…»? \n1. сделать сегодня \n2. сделать послезавтра \n3. сделать через месяц \n4. никогда не делать');

// let question4 = ('Что говорит человек, когда замечает нечто необычное?\n1. попало в лоб\n2.залетело в рот\n3. накапало в уши\n4. бросилось в глаза');

// let answer = +prompt(question1);

// if( answer == 1){
//     alert(`vi vigrali 100grn`);
//     answer = +prompt(question2);

//     if(answer == 4){
//         alert(`vi vigrali 200grn`);
//     } else {
//     alert(`konec igri!`);
//     }

// } else {
//     alert(`konec igri!`);
// }

// const number = +prompt('vvedite 4islo');
// if (number % 2 == 0 ){
//     alert('eto 4etnoe 4islo')
// } else{
//     alert('eto ne4etnoe 4islo')
// }

let number =+prompt('vvedite 4islo bileta');

let digit6 = number % 10;
number = (number-digit6)/10;
let digit5 = number % 10;
number = (number-digit5)/10;
let digit4 = number % 10;
number = (number-digit4)/10;
let digit3 = number % 10;
number = (number-digit3)/10;
let digit2 = number % 10;
number = (number-digit2)/10;
let digit1 = number % 10;
number = (number-digit1)/10;

// alert (`${number}`);
// alert (`${digit6}`);
// alert (`${digit5}`);

if((digit1+digit2+digit3) == (digit4+digit5+digit6)){
    alert('u vas shasliviy bilet');
}else{
    alert('u vas obi4niy bilet');
}