// Validation
let validation = document.getElementById("boutonEnvoi");
// nom
let nom = document.getElementById("nom");
let nomM = document.getElementById("nomManquant");
// prénom
let prenom = document.getElementById("prenom");
let prenomM = document.getElementById("prenomManquant");
// Ville
let ville = document.getElementById("city");
let villeM = document.getElementById("villeManquant");
// Date de naissance
let dateNaissance = document.getElementById("birth");
let dateNaissanceM = document.getElementById("dateNaissanceManquant");
// Code postal
let codePostal = document.getElementById("cd");
let codePostalM = document.getElementById("codePostalManquant");
// Regex
let regexString = new RegExp(/^[a-z ,.'-]+$/i);
let regexCodePostal = new RegExp(/^([A-Z0-9]{5})$/);


// Prénom
function fValid(e) {
    if (prenom.value === "") {
        e.preventDefault();
        prenomM.textContent = "Prénom manquant";
        prenomM.style.color = "red";
    } else if (regexString.test(prenom.value) === false) {
        event.preventDefault();
        prenomM.textContent = "Format incorrect";
        prenomM.style.color = "orange";
    } else {

    }
}

// Nom
function fValid2(e) {
    if (nom.value === "") {
        e.preventDefault();
        nomM.textContent = "Prénom manquant";
        nomM.style.color = "red";
    } else if (regexString.test(nom.value) === false) {
        event.preventDefault();
        nomM.textContent = "Format incorrect";
        nomM.style.color = "orange";
    } else {

    }
}

// ville
function fValid3(e) {
    if (ville.value === "") {
        e.preventDefault();
        villeM.textContent = "Ville manquante";
        villeM.style.color = "red";
    } else if (regexString.test(nom.value) === false) {
        event.preventDefault();
        villeM.textContent = "Format incorrect";
        villeM.style.color = "orange";
    } else {

    }
}

// Date de naissance
function fValid4(e) {
    if (dateNaissance.value === "") {
        e.preventDefault();
        dateNaissanceM.textContent = "Date manquante";
        dateNaissanceM.style.color = "red";
    } else {

    }
}

// Code postal
function fValid5(e) {
    if (codePostal.value === "") {
        e.preventDefault();
        codePostalM.textContent = "Code postal manquant";
        codePostalM.style.color = "red";
    } else if (regexCodePostal.test(nom.value) === false) {
        event.preventDefault();
        codePostalM.textContent = "Format incorrect";
        codePostalM.style.color = "orange";
    } else {

    }
}

// Validation utilisation de la fonction fValid
validation.addEventListener("click", fValid);
validation.addEventListener("click", fValid2);
validation.addEventListener("click", fValid3);
validation.addEventListener("click", fValid4);
validation.addEventListener("click", fValid5);