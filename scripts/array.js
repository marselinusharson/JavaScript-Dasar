let arr = [];

arr = ["marselinus", 1, true, NaN];

arr.push("Rewo", "Marselinus", "Dinda", "Juliantari");
console.table(arr);

let panjang = arr.length;
console.log(panjang);

//mengubah nilai elemen array
console.log(arr[6]);
arr[2] = "Trihana";//array index 2 berubah  menjadi Trihana/
console.table(arr);

delete arr[3];
console.table(arr);
console.info(arr.length);
