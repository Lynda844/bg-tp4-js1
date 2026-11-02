
// TP4 - Exercice 3
// slide5
 
// Données Students : tableau d'objets 
// (14, 5) dans l'énoncé = moyenne 14,5 -> 14.5 en JavaScript
const Students = [
  { id: 1000, nom: "JOHN",   prenom: "DOE",     moyenne: 14.5 },
  { id: 2000, nom: "BOB",    prenom: "CARLTON", moyenne: 7.1 },
  { id: 3000, nom: "RAYANE", prenom: "SMITH",   moyenne: 13.3 }
];
 
// Fonction B : un seul paramètre float, retourne un booléen 
function B(moyenne) {
  return moyenne >= 10; // condition -> true/false 
}
 
// Fonction A : appelle B pour chaque étudiant 
function A() {
  // Boucle for...of 
  for (const s of Students) {
    // Opérateur ternaire 
    const resultat = B(s.moyenne) ? "ADMIS" : "AJOURNÉ";
    console.log(s.id + ": " + resultat);
  }
}
