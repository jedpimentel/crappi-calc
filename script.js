/*
function sum(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) { return a / b; }

function calc(op) {
  return function() {
    var numA = document.getElementById("first" ).value;
    var numB = document.getElementById("second").value;
    var res =  op(Number(numA), Number(numB));
    var target = document.getElementById("output");
    console.log(res);
    target.innerHTML = res;
    document.getElementById("first" ).value = res;
  }
}
document.getElementById("sum").onclick = calc(sum);
document.getElementById("sub").onclick = calc(sub);
document.getElementById("mul").onclick = calc(mul);
document.getElementById("div").onclick = calc(div);
*/

function sum(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) { return a / b; }

var lastOp = sum;
var lastInput;
// hat $30 7 boston 8 ny
//
function calc(op) {
  return function() {
    var runningTot = document.getElementById("first" ).value;
    var input      = document.getElementById("second").value || null;
    if (input === null) {
      return;
    }
    lastInput = input;
    var res        =  lastOp(Number(runningTot), Number(input));
    var target = document.getElementById("output");


    console.log(res);
    target.innerHTML = res;

    document.getElementById("second" ).value = "";
    document.getElementById("first" ).value = res;
    lastOp = op;
    document.getElementById("memOp" ).innerHTML = op.name;
  }
}
// running total
function reset() {
  document.getElementById("first" ).value = 0;
  document.getElementById("second").value = "";
  document.getElementById("output").innerHTML = "_";

  document.getElementById("memOp" ).innerHTML = lastOp.name;
}
reset();


document.getElementById("sum").onclick = calc(sum);
document.getElementById("sub").onclick = calc(sub);
document.getElementById("mul").onclick = calc(mul);
document.getElementById("div").onclick = calc(div);
document.getElementById("="  ).onclick = calc(lastOp);
document.getElementById("ce" ).onclick = reset;
