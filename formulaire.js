
//la function afficher dit ce qui devra se passer qand on va appuyer sur le bouton.//
function afficher() {
    
//appelation des éléménts du html dans le dom ; il s'agit des éléménts existants déjà,des champs que l'utilisateur devra remplir//
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let avis = document.querySelector("#avis");
    let coach = document.querySelector("#coach");
    let textarea = document.querySelector("#textarea");
    
//appelation des id des elements vide crées dans le html où sera recuperé et afficher les messages des utilisateurs//
    let nom = document.querySelector("#nom");
    let text = document.querySelector("#text");
    let opinion = document.querySelector("#opinion");
    let professeur =document.querySelector("#professeur");
    let message = document.querySelector("#message");

//déclaration et rattachements des messages à son champ exact//

    nom.innerHTML = "bonjour " + name.value;
    text.innerHTML = email.value;
    opinion.innerHTML = avis.value;
    professeur.innerHTML = coach.value;
    message.innerHTML = textarea.value;
}