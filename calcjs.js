let num1=9
let num2 =5
document.getElementById("num1-el").textContent=num1
document.getElementById("num2-el").textContent=num2


function add() {
    sum=num1+num2
    console.log(sum)
    document.getElementById("sum-el").textContent=sum
}

function subtract(){
   sum=num1-num2
   console.log(sum)
   document.getElementById("sum-el").textContent=sum
}

function divide(){
    sum=num1/num2
    console.log(sum)
    document.getElementById("sum-el").textContent=sum
}

function multiply(){
    sum=num1*num2
    console.log(sum)
    document.getElementById("sum-el").textContent=sum

}
//simple way
// let sumEl = document.getElementById("sum-el")
//function add() {
    //let result = num1 + num2
    //sumEl.textContent = "Sum: " + result
//}
