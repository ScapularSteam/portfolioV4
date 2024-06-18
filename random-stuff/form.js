// Takes name as an input and creates a customised alert on the page

function test_popup() {
    let name = document.forms["test"]["test_name"].value;

    alert(`Hi ${name} nice to meet you!`)
}

// Takes two numbers as an input, calculates the result, and then updates element to show this

function simple_addition() {
    let number1 = document.forms["calculator"]["number_1"].value;
    let number2 = document.forms["calculator"]["number_2"].value;

    result = parseInt(number1) + parseInt(number2);
    console.log(result);

    document.getElementById("calculation-result").innerHTML = result;
}