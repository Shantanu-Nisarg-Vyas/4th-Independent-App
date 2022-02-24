function add() {
    no1 = parseInt(document.getElementById("number1").value);
    no2 = parseInt(document.getElementById("number2").value);
    answer = no1 + no2;
    document.getElementById("result").innerHTML = answer;
    console.log(no1 + "+" + no2 + "=" + answer);
}

function subtract() {
    no1 = document.getElementById("number1").value;
    no2 = document.getElementById("number2").value;
    answer = no1 - no2;
    document.getElementById("result").innerHTML = answer;
    console.log(no1 + "-" + no2 + "=" + answer);
}

function multiply() {
    no1 = document.getElementById("number1").value;
    no2 = document.getElementById("number2").value;
    answer = no1 * no2;
    document.getElementById("result").innerHTML = answer;
    console.log(no1 + "*" + no2 + "=" + answer);
}

function divide() {
    no1 = document.getElementById("number1").value;
    no2 = document.getElementById("number2").value;
    answer = no1 / no2;
    document.getElementById("result").innerHTML = answer;
    console.log(no1 + "/" + no2 + "=" + answer);
}