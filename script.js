function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
 }
// implement calculator result evaluation function
 function Result() {
    var num1 = document.getElementById('res').value;
    try {
       var num2 = eval(num1.replace('x', '*'));
       document.getElementById('res').value = num2;
    } catch {
       document.getElementById('res').value = 'Error';
    }
}
//  add Clear() function to reset input field
 function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
 }
//   add backspace functionality to remove last character
 function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
 }
//  Added keyboard support for calculator
 document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    if (validKeys.includes(key)) {      // Added keyboard support to calculator
       Solve(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
       Result();
    } else if (key === 'Backspace') {
       Back();
    } else if (key.toLowerCase() === 'c') {
       Clear();
    }
 });