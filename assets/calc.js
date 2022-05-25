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
    
    if (num1>=0 && num2>=0) {
        
        let answer=num1+num2;
        toResult.innerText=answer
        toResult.style.color = "blue";
    }
    else{
        toResult.innerText="Do net leave inputs empty"
        toResult.style.color = "blue";
    }
    first.value=""
    second.value=""
};
minus.onclick = function () {
    let num1 = parseInt(first.value) 
    let num2 = parseInt(second.value)
    if (num1>=0 && num2>=0) {
        
        let answer=num1-num2;
        toResult.innerText=answer
        toResult.style.color = "red";
    }
    else{
        toResult.innerText="Do net leave inputs empty"
        toResult.style.color = "red";
    } 
    first.value=""
    second.value=""
};
mult.onclick = function () {
    let num1 = parseInt(first.value) 
    let num2 = parseInt(second.value) 
    if (num1>=0 && num2>=0) {
        let answer=num1*num2; 
        toResult.innerText=answer
        toResult.style.color = "green";
    }
    else{
        toResult.innerText="Do net leave inputs empty"
        toResult.style.color = "green";
    }
    first.value=""
    second.value=""
};
divide.onclick = function () {
    let num1 = parseInt(first.value) 
    let num2 = parseInt(second.value) 
    if (num1>=0 && num2>=0) {
        let answer=num1/num2;
        toResult.innerText=answer
        toResult.style.color = "orange";
    }
    else{
        toResult.innerText="Do net leave inputs empty"
        toResult.style.color = "orange";
    }
    first.value=""
    second.value=""
};