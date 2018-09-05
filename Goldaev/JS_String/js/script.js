"strict mode";

var isWork;

var login;
var password;
var email;

main()

function main() {
    isWork = true;
    while(isWork){
        //checkURL();
        loginForm();
    }
}




// работа с URL
function checkURL() {

    var srt = prompt('Введите сайт',  'http://site.ua');

    check(srt);

    isWork = confirm("Continue or end?");

}

// Проверка URL и вывод
function check(site) {

    var res;

    for(var i = 0; i < site.length; i++){

        if(site.charAt(i) == '/'){
            i += 2;
            if(site.charAt(i) == 'w') i += 4;
            res = site.substring(i, site.length);
            break;
        }
    }
    alert(res);
}


// ввод логина, пароля, емейла
function loginForm() {

    enterLogin();

    enterPass();

    enterEmail();

    isWork = confirm("Continue or end?");

}

// ввод логина
function enterLogin() {

    login = prompt("Enter login", "taylor_143");

}

// ввод пароля
function enterPass() {

    password = prompt("Enter password more than 5 symbols)");

    while(password.length <= 5)
        password = prompt("Enter more than 5 symbols!!");

}

// ввод емейла
function enterEmail() {

    email = prompt("Enter email");

    checkDog();

    checkSpace();

    checkEnd();

    checkDogInWord();

}

// проверка емейла на "собачку"
function checkDog() {
    var havedog = false;
    while(havedog == false){

        if(email.includes('@')) havedog = true;
        else email = prompt('Enter email with @');

    }
}

// проверка емейла на пробелы
function checkSpace() {

    var havespace = false;

    while(havespace == false){
        if(email.includes(' ') && email.length>2) email = prompt('Email mustn\'t contain spaces!');
        else havespace = true;
    }

}

// проверка емейла на окончание ".com"
function checkEnd() {
    var normalEnd = false;

    while(normalEnd == false) {
        if (email.endsWith('.com')) normalEnd = true;
        else email = prompt('Email must ends with ".com"!');
    }
}

// проверка емейла на содержание "собачки" конкретно в слове до ".com"
function checkDogInWord() {
    var dogInWord = false;

    while(dogInWord == false){

        var line;

        for(var i = 0; i < email.length; i++){
            if(email.charAt(i) == '.') line = email.substring(0, i+1);
        }

        if(line.includes('@')) dogInWord = true;
        else email = prompt('@ should be in word before ".com"');

    }
}