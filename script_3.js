let etages = prompt(
  "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
);
let result = "";
for (let i = 1; i <= etages; i++) {
  result = "";
  for (let j = 1; j <= etages - i; j++) {
    result += " ";
  }
  for (let k = 1; k <= i; k++) {
    result += "#";
  }
  console.log(result);
}
