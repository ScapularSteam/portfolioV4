// Initilise array to store digits and variable to store current digit

let calculation = new Array();
let currentElement = 0;

// Function to refresh the calculation display after each button press
function update_display() {
    const display = document.getElementById("display-result");
    display.innerHTML = calculation
}


// Function to be called on a number button press
function input(number) {

    calculation.push(number);
    currentElement = currentElement + 1;

    update_display();

};

// Function to be called on an operator button press
function operator(operation) {

    calculation.push(operation);
    currentElement = currentElement + 1;

    update_display();

}

// Function to be called on delete button press
function del() {

    calculation.pop()
    currentElement = currentElement - 1;

    update_display();

}

function equals() {

    let operator;
    let operatorIndex;

    for (let i = 0; i < calculation.length; i++) {

        // Horifically inefficiant way to find the operator in the equation
        if (calculation[i] === '+') {
            operator = '+';
            operatorIndex = i;
        } else if (calculation[i] === '-') {
            operator = '-';
            operatorIndex = i;
        } else if (calculation[i] === '*') {
            operator = '*';
            operatorIndex = i;
        } else if (calculation[i] === '/') {
            operator = '/';
            operatorIndex = i;
        };


        // Parse the two numbers from the array
        let number1 = calculation[0, operatorIndex - 1];
        let number2 = calculation[operatorIndex + 1, calculation.length - 1];

        console.log(number1);
        setTimeout(() => console.log(number2), 1000)
    };


}