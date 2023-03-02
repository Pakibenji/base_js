let nombre = prompt("De quelle nombre veux-tu calculer la factorielle ?");
let resultat = 1;
for (let i = 1; i <= nombre; i++) {
  resultat = resultat * i;
}
console.log("Le résultat est : " + resultat);
