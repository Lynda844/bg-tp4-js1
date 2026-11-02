// / TP4 - Exercice 2
// Script externe lié au HTML avec <script src> (slide 25, méthode 3)
 
// F1 : appelée au clic (événement onclick, slides 18-19)
function f1() {
  // Tableau de chaînes de caractères (slide 39)
  const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
 
  // Boucle for : parcours du tableau avec length (slides 45 et 39)
  for (let i = 0; i < etudiants.length; i++) {
    console.log(etudiants[i]); // accès par indice (slide 39), console.log (slide 34)
  }
}
 
// F2 : objet avec propriétés clé/valeur (slide 40)
function f2() {
  const etudiant = { nom: "John", prenom: "DOE", age: 30 }; // déclaration d'un objet (slide 40)
  console.log(etudiant); // l'objet s'affiche dépliable dans la console (slides 34 et 40)
}
 
// F3 : tableau d'objets (slide 41)
function f3() {
  const etudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
  ];
 
  // Boucle for..of : parcourt chaque élément du tableau (slide 45)
  for (const etudiant of etudiants) {
    // Accès aux propriétés avec le point (slide 40) et concaténation avec + (slide 38)
    console.log(etudiant.nom + "-" + etudiant.prenom + "-" + etudiant.age);
  }
}
 
