 
// TP4 - Exercice 1
// Script externe script.js lié au HTML avec <script src> (slide 25, méthode 3)
// Commentaires sur une ligne avec // (slide 37)
 
// Variables avec let (modifiable) et const (constante) (slide 52)
// Types primitifs : string, number (entier et réel) (slide 38)
const nom = "John";   // string (slide 38)
const prenom = "Doe"; // string (slide 38)
let age = 30;         // number entier (slide 38)
let note = 15;        // number (slide 38)
const pi = 3.14;      // number réel, constante (slides 38 et 52)
 
// F1 : fonction sans paramètre (slide 46), appelée par l'événement onclick (slides 18-19)
function f1() {
  // Affichage dans la console avec console.log (slide 34)
  console.log(nom);
}
 
// F2 : affiche le prénom
function f2() {
  console.log(prenom); // console.log (slide 34)
}
 
// F3 : concaténation de chaînes avec l'opérateur + (slide 38)
function f3() {
  console.log(nom + "-" + prenom);
}
 
// F4 : affiche l'âge
function f4() {
  console.log(age); // console.log (slide 34)
}
 
// F5 : affiche la note
function f5() {
  console.log(note); // console.log (slide 34)
}
 
// F6 : affiche Pi
function f6() {
  console.log(pi); // console.log (slide 34)
}
