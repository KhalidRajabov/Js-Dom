let first = document.getElementById("first");
let second = document.getElementById("second");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let mult = document.getElementById("mult");
let divide = document.getElementById("divide");
let toResult = document.getElementById("area");



plus.onclick = function () {
    let num1 = parseInt(first.value) 
    let num2 = parseInt(second.value) 
    if (num1!="" && num2!="") {
        
        let answer=num1+num2;
        toResult.innerText=answer
        toResult.style.color = "blue";
    }
};
minus.onclick = function () {
    let num1 = parseInt(first.value) 
    let num2 = parseInt(second.value)
    if (num1!="" && num2!="") {
        
        let answer=num1-num2;
        toResult.innerText=answer
        toResult.style.color = "red";
    } 
};
mult.onclick = function () {
    let num1 = parseInt(first.value) 
    let num2 = parseInt(second.value) 
    let answer=num1*num2; 
    toResult.innerText=answer
    toResult.style.color = "green";
};
divide.onclick = function () {
    let num1 = parseInt(first.value) 
    let num2 = parseInt(second.value) 
    let answer=num1/num2;
    toResult.innerText=answer
    toResult.style.color = "orange";
};