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