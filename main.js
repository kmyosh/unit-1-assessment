let counter = document.getElementById("counter");
let minusButton = document.getElementById("minus-button");
let addButton = document.getElementById("add-button");
let input = document.getElementById("input").value;
let addValue = 1;
let subtractValue = -1;

function add() {
  let sum = parseInt(document.getElementById("input").value) + input;
  counter.innerHTML = sum;
  console.log(sum);
}
addButton.onclick = add;

function subtract() {
  let difference =
    parseInt(document.getElementById("input").value) - input;
  counter.innerHTML = difference;
  console.log(difference);
}
minusButton.onclick = subtract;
