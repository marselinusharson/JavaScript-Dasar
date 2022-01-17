let a = 1,
  b = 3;
let sum = a + b;

document.writeln(a + " + " + b + " = " + sum);
document.writeln("<br>");

let kali = a * b;
document.writeln(a + " * " + b + " = " + kali);

a += sum;
b += kali;
let bagi = a / b;
document.writeln("<br>");
document.writeln(a + " / " + b + " = " + bagi.toFixed(2));
//bilangan negatif
a = -12;
bagi = a / b;
document.writeln("<br>");
document.writeln(a + " / " + b + " = " + bagi.toFixed(2));
document.writeln("<br>");

// increment decrement
a++;
b--;
bagi = a / b;
document.writeln(a + " / " + b + " = " + bagi.toFixed(2));
