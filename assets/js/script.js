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
// Adresse mail
let email = document.getElementById("email");
let emailM = document.getElementById("emailManquant");
// Regex
let regexString = /^[a-z ,.'-]+$/i;
let regexCodePostal = /^([0-9]{5})$/;
let regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// Prénom
function fValid(e) {
    if (prenom.value === "") {
        e.preventDefault();
        prenomM.textContent = "Prénom manquant";
        prenomM.style.color = "red";
    } else if (regexString.test(prenom.value) === false) {
        e.preventDefault();
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
        e.preventDefault();
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
        e.preventDefault();
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
        e.preventDefault();
        codePostalM.textContent = "Format incorrect";
        codePostalM.style.color = "orange";
    } else {

    }
}

// Email
function fValid6(e) {
    if (email.value === "") {
        e.preventDefault();
        emailM.textContent = "Adresse mail manquante";
        emailM.style.color = "red";
    } else if (regexMail.test(nom.value) === false) {
        e.preventDefault();
        emailM.textContent = "Format incorrect";
        emailM.style.color = "orange";
    } else {

    }
}

// Validation utilisation de la fonction fValid
validation.addEventListener("click", fValid);
validation.addEventListener("click", fValid2);
validation.addEventListener("click", fValid3);
validation.addEventListener("click", fValid4);
validation.addEventListener("click", fValid5);
validation.addEventListener("click", fValid6);