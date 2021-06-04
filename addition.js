function Add() {
    var x = document.getElementById("x");
    var y = document.getElementById("y");
    var sum = document.getElementById("answer");
    var z = parseInt(x.value) + parseInt(y.value);
    sum.innerText = z;
}         