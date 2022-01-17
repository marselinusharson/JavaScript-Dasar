let a = "1";
let b = 1;
let sum = a + b;
document.writeln(`<p>${sum}</p>`);

//function js untuk konversi tipe data

a = parseInt("1");
b = parseInt("1.2");
sum = a + b;
document.writeln(`<p>${a} + ${b} = ${sum}</p>`);

b = parseFloat("1.9");
sum = a + b;
document.writeln(`<p>${a} + ${b} = ${sum}</p>`);

b = Number("5.9");
sum = a + b;
document.writeln(`<p>${a} + ${b} = ${sum}</p>`);

a = 1;
b = 1;
sum = a.toString() + b.toString();
document.writeln(`<p>${a} + ${b} = ${sum}</p>`);

//NaN
a = parseInt("salah");
b = parseInt("22salah");
sum = a + b;
document.writeln(`<p>${a} + ${b} = ${sum}</p>`);
b = Number("22salah");
sum = a + b;
document.writeln(`<p>${a} + ${b} = ${sum}</p>`);
let cek = isNaN(b);
document.writeln(`<p>${cek}</p>`);
a = 9;
cek = isNaN(a);
document.writeln(`<p>${cek}</p>`);
