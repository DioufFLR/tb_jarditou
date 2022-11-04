let myForm = document.getElementById("myForm");

// Nom

myForm.addEventListener("submit", function (e) {
    let myInput = document.getElementById("nom");
    let regexString = new RegExp(/^[a-zA-Z-\s]+$/);
    if (myInput.value.trim() === "") {
        let nomM = document.getElementById("nomManquant");
        nomM.innerHTML = "Le nom est requis.";
        nomM.style.color = 'red';
        e.preventDefault();
    } else if (regexString.test(myInput.value) === false) {
        let nomM = document.getElementById("nomManquant");
        nomM.innerHTML = "Le format est incorrect.";
        nomM.style.color = 'blue';
        e.preventDefault();
    }
});

// Prénom

myForm.addEventListener("submit", function (e) {
    let myInput = document.getElementById("prenom");
    let regexString = new RegExp(/^[a-zA-Z-\s]+$/);
    if (myInput.value.trim() === "") {
        let prenomM = document.getElementById("prenomManquant");
        prenomM.innerHTML = "Le prenom est requis.";
        prenomM.style.color = 'red';
        e.preventDefault();
    } else if (regexString.test(myInput.value) === false) {
        let prenomM = document.getElementById("prenomManquant");
        prenomM.innerHTML = "Le format est incorrect.";
        prenomM.style.color = 'blue';
        e.preventDefault();
    }
});

// Date de naissance

myForm.addEventListener("submit", function (e) {
    let myInput = document.getElementById("birth");
    if (myInput.value.trim() === "") {
        let dateM = document.getElementById("dateNaissanceManquant");
        dateM.innerHTML = "Votre date est requise.";
        dateM.style.color = 'red';
        e.preventDefault();
    }
});

// Code postale

myForm.addEventListener("submit", function (e) {
    let myInput = document.getElementById("cd");
    let regexCD = new RegExp(/^([0-9]{5})$/);
    if (myInput.value.trim() === "") {
        let codePostalM = document.getElementById("codePostalManquant");
        codePostalM.innerHTML = "Le code postal est requis.";
        codePostalM.style.color = 'red';
        e.preventDefault();
    } else if (regexCD.test(myInput.value) === false) {
        let codePostalM = document.getElementById("codePostalManquant");
        codePostalM.innerHTML = "Le format est incorrect.";
        codePostalM.style.color = 'blue';
        e.preventDefault();
    }
});

// Email

myForm.addEventListener("submit", function (e) {
    let myInput = document.getElementById("email");
    let regexCD = new RegExp(/^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/);
    if (myInput.value.trim() === "") {
        let emailM = document.getElementById("emailManquant");
        emailM.innerHTML = "Votre email est requis.";
        emailM.style.color = 'red';
        e.preventDefault();
    } else if (regexCD.test(myInput.value) === false) {
        let emailM = document.getElementById("emailManquant");
        emailM.innerHTML = "Le format est incorrect.";
        emailM.style.color = 'blue';
        e.preventDefault();
    }
});

// Sujet

myForm.addEventListener("submit", function (e) {
    let myInput = document.getElementById("sujet");
    if (myInput.value.trim() === "") {
        let emailM = document.getElementById("sujetManquant");
        emailM.innerHTML = "Champs requis.";
        emailM.style.color = 'red';
        e.preventDefault();
    }
});

// Question

myForm.addEventListener("submit", function (e) {
    let myInput = document.getElementById("question");
    if (myInput.value.trim() === false) {
        let questionM = document.getElementById("questionManquante");
        questionM.innerHTML = "Commentaire requis.";
        questionM.style.color = 'red';
        e.preventDefault();
    }
});

