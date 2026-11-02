// / TP4 - Exercice 3
// Script externe lié au HTML avec <script src> (slide 25, méthode 3)
 
// Données Students : tableau d'objets (slide 41)
// Dans l'énoncé (14, 5) signifie la note 14,5 -> 14.5 en JS (number réel, slide 38)
// Variable globale déclarée avec const (slides 51 et 52)
const Students = [
  { id: 1000, nom: "JOHN",   prenom: "DOE",     moyenne: 14.5 },
  { id: 2000, nom: "BOB",    prenom: "CARLTON", moyenne: 7.1 },
  { id: 3000, nom: "RAYANE", prenom: "SMITH",   moyenne: 13.3 }
];
 
// Fonction B : un seul paramètre de type float, retourne un booléen
// Déclaration de fonction avec paramètre et return (slide 46)
function B(moyenne) {
  // Opérateur relationnel >= qui donne true ou false (slide 42)
  return moyenne >= 10;
}
 
// Fonction A : appelée au clic (événement onclick, slides 18-19), elle appelle B (slide 46)
function A() {
  // Boucle for..of sur le tableau d'objets (slide 45)
  for (const student of Students) {
    // Notation ternaire : condition ? valeur_si_vrai : valeur_si_faux (slide 43)
    const decision = B(student.moyenne) ? "ADMIS" : "AJOURNÉ";
    // Concaténation avec + (slide 38) et console.log (slide 34)
    console.log(student.id + ": " + decision);
  }
}

