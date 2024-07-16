var prenom = prompt ("Comment tu t'appelle ?");
var titre = document.getElementById('titre');
console.log(titre)
titre.innerText = "Bonjour " + prenom;
if(prenom == "Vahina"){
alert("Comme moi !");
titre.style.color = "#008000";
}else{
titre.style.color = "#000000";
}