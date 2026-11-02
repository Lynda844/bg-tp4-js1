
// TP4 - Exercice 2
// slide4
 
// F1 : tableau de chaînes 
function f1() {
  const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
 
  // Boucle for pour afficher un élément par ligne 
  for (let i = 0; i < etudiants.length; i++) {
    console.log(etudiants[i]);
  }
}
 
// F2 : objet littéral avec propriétés 
function f2() {
  const etudiant = { nom: "John", prenom: "DOE", age: 30 };
  console.log(etudiant);
}
 
// F3 : tableau d'objets
function f3() {
  const etudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
  ];
 
  // Boucle for...of pour parcourir le tableau 
  for (const e of etudiants) {
    console.log(e.nom + "-" + e.prenom + "-" + e.age); // concaténation
  }
}
