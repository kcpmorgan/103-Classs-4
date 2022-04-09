function sumTwoNumbers(){
    let num1;
    let num2;

    num1 = parseInt(prompt(`Add a number`));
    num2 = parseInt(prompt(`Add a number`));

    let result = num1 + num2;

    alert(`The result is: `+result);

}

function init(){
    sumTwoNumbers();
}

window.onload = init;