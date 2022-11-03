// Validation
let validation = document.getElementById("boutonEnvoi");
// nom
let nom = document.getElementById("nom");
let nomM = document.getElementById("nomManquant");
// prénom
let prenom = document.getElementById("prenom");
let prenomM = document.getElementById("prenomManquant");
// Regex
let regexNomPrenom = /^[a-zA-Zéèîï][a-zéèàçîï]+([-'\s] [a-zA-Zéèîï][a-zéèàçîï]+)?/;
let regexAdresse =

// fonction pour vérifier les champs
function fValid(e) {
    if (prenom.validity.valueMissing) {
        e.preventDefault();
        prenomM.textContent = "Prénom manquant";
        prenomM.style.color = "red";
    } else if (regexNomPrenom.test(prenom.value) === false) {
        event.preventDefault();
        prenomM.textContent = "Format incorrect";
        prenomM.style.color = "orange";
    } else {

    }
    if (nom.validity.valueMissing) {
        e.preventDefault();
        nomM.textContent = "Nom manquant";
        nomM.style.color = "red";
    } else if (regexNomPrenom.test(nom.value) === false) {
        event.preventDefault();
        nomM.textContent = "Format incorrect";
        nomM.style.color = "orange";
    } else {

    }
}
// Validation utilisation de la fonction fValid
validation.addEventListener("click", fValid);