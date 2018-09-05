"strict mode";


let isGame = true;
let rate = 0;
let deposit = 0;
let side = 0;
let randNum = 0;

game();

function game() {

    greetings();

    makeDeposit();

    //игра
    while(isGame) {

        makeRate();

        makeSide();

        throwKubs();

        logic();

        //проверка на остаток депозита
        if(deposit <= 0){
            alert("Денег нет, но вы держитесь :) \nGame over!");
            break;
        }

        askContinue();

    }

}

function greetings() {
    alert("Игра в Банк на костях");

    isGame = confirm("Уверены, что хотите сыграть?");
    if(!isGame){
        alert("Боягуз! \nGame over!");
        return;
    }
}

function makeRate() {
    //ввод ставки
    rate = +prompt("Текущий депозит = " + deposit + "\nВведите ставку:", 40);

    //проверка ставки
    while (rate > deposit || rate <= 0) {
        alert("Плохая ставка! (" + rate + ") \n Введите ставку в диапазоне 0-" + deposit + "!!");
        rate = +prompt("Текущий депозит = " + deposit + "\nВведите ставку:", 40);
    }
}

function makeDeposit() {
    deposit = +prompt("Введите депозит: ", 100);

    //проверка депозита
    while(deposit < 0){
        alert("Уже в долгу! \n Введите лучше число больше 0");
        deposit = +prompt("Введите депозит: ", 100);
    }
}

function makeSide() {
    //ввод цыфры
    side = +prompt("На какую цыфру костей делаете ставку?:", 2);

    //проверка цыфры
    while (side > 6 || side < 1) {
        alert("Плохая цыфра! \n Введите цыфру в диапазоне 1-6!");
        side = prompt("Введите цыфру в диапазоне 1-6:", 2);
    }
}

function throwKubs() {
    randNum = new Array();

    alert("Бросаем кости.");

    //массив 3 рандомных чисел
    for (var i = 0; i < 3; i++) randNum.push(Math.floor(Math.random() * (7 - 1)) + 1);

    alert("Вы выбрали : " + side + "\nКости, которые выпали. \n" + randNum[0] + " , " + randNum[1] + " , " + randNum[2]);

}

function logic() {
    //коефициент выиграша, если 0 - то игрок проиграл
    var k = 0;

    for (var i = 0; i <= 3; i++) {
        if (randNum[i] == side) k++;
    }

    //проверка на проиграш/выигрыш
    if (k != 0) {
        rate *= k;
        alert("Ставка была " + rate + "\nПоздравляем! \nВы выиграли " + rate);
        deposit += rate;
    } else {
        alert("Упс! \nВы проиграли.");
        deposit -= rate;
    }

    alert("Ваш депозит :" + deposit);
}

function askContinue() {
    isGame = confirm("Хотите сыграть еще?");

    if(isGame == false){
        alert("Быстро вы сдались. \nGame over!");
    }
}


