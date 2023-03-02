const entrepreneurs = [
  { first: "Steve", last: "Jobs", year: 1955 },
  { first: "Oprah", last: "Winfrey", year: 1954 },
  { first: "Bill", last: "Gates", year: 1955 },
  { first: "Sheryl", last: "Sandberg", year: 1969 },
  { first: "Mark", last: "Zuckerberg", year: 1984 },
  { first: "Beyonce", last: "Knowles", year: 1981 },
  { first: "Jeff", last: "Bezos", year: 1964 },
  { first: "Diane", last: "Hendricks", year: 1947 },
  { first: "Elon", last: "Musk", year: 1971 },
  { first: "Marissa", last: "Mayer", year: 1975 },
  { first: "Walt", last: "Disney", year: 1901 },
  { first: "Larry", last: "Page", year: 1973 },
  { first: "Jack", last: "Dorsey", year: 1976 },
  { first: "Evan", last: "Spiegel", year: 1990 },
  { first: "Brian", last: "Chesky", year: 1981 },
  { first: "Travis", last: "Kalanick", year: 1976 },
  { first: "Marc", last: "Andreessen", year: 1971 },
  { first: "Peter", last: "Thiel", year: 1967 },
];

/* 1. Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;*/

/* Premiere solution */

console.log("-1 Les entrepreneurs nés dans les années 70 sont :");

let soixanteDix1 = [];
for (let i = 0; i < entrepreneurs.length; i++) {
  if (entrepreneurs[i].year >= 1970 && entrepreneurs[i].year < 1980) {
    soixanteDix1.push(entrepreneurs[i]);
  }
}
console.log(soixanteDix1);

/* Deuxieme solution */

console.log("-1bis Les entrepreneurs nés dans les années 70 sont :");

let soixanteDix2 = entrepreneurs.filter(
  (entrepreneurs) => entrepreneurs.year >= 1970 && entrepreneurs.year < 1980
);
console.log(soixanteDix2);

/*2. Sors une array qui contient le prénom et le nom des entrepreneurs */

/* Premiere solution */

console.log("-2 Les prénoms et noms des entrepreneurs sont :");

let firstLast = [];
for (let i = 0; i < entrepreneurs.length; i++) {
  firstLast.push(entrepreneurs[i].first + " " + entrepreneurs[i].last);
}
console.log(firstLast);

/* Deuxieme solution */

console.log("-2bis Les prénoms et noms des entrepreneurs sont :");

let firstLast2 = entrepreneurs.map(
  (entrepreneurs) => entrepreneurs.first + " " + entrepreneurs.last
);
console.log(firstLast2);

// 3. Quel âge aurait chaque inventeur aujourd'hui ?

/* Premiere solution */

console.log("-3 Les âges des entrepreneurs sont :");

let age = [];
for (let i = 0; i < entrepreneurs.length; i++) {
  age.push(
    entrepreneurs[i].first +
      " " +
      entrepreneurs[i].last +
      " aurait " +
      (2023 - entrepreneurs[i].year) +
      " ans."
  );
}
console.log(age);

/* Deuxieme solution */

console.log("-3bis Les âges des entrepreneurs sont :");
let age2 = entrepreneurs.map(
  (entrepreneurs) =>
    entrepreneurs.first +
    " " +
    entrepreneurs.last +
    " aurait " +
    (2023 - entrepreneurs.year) +
    " ans."
);
console.log(age2);

// 4. Trie les entrepreneurs par ordre alphabétique du nom de famille.

/* Premiere solution */

console.log("-4 Les entrepreneurs par ordre alphabétique du nom de famille :");

let familyName = [];

for (let i = 0; i < entrepreneurs.length; i++) {
  familyName.push(entrepreneurs[i].last);
}
console.log(familyName.sort());

/* Deuxieme solution */

console.log(
  "-4bis Les entrepreneurs par ordre alphabétique du nom de famille :"
);

let familyName2 = entrepreneurs.map((entrepreneurs) => entrepreneurs.last);
console.log(familyName2.sort());
