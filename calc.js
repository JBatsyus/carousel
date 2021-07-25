function plus() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 + num2;
    document.getElementById('out').value = result;
}
function subtraction() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 - num2;
    document.getElementById('out').value = result;

}
function multiplication() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 * num2;
    document.getElementById('out').value = result;

}
function division () {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    result = num1 / num2;
    document.getElementById('out').value = result;

}

function myFunction() {
    document.getElementById("myForm").reset();
}
function myС() {
    document.getElementById("myCleen").reset();
}