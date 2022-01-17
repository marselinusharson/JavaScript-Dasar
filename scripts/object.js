const person = {
  nama: "Marselinus Harson Rewo",
  umur: 20,
  asal: "Bajawa",
};
console.table(person);
delete person.asal;
console.table(person);

console.info(`nama : ${person.nama}`);
console.info(`umur : ${person.umur}`);