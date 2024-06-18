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