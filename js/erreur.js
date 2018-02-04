function surligne(champ, erreur)
{
   if(erreur)
       champ.style.border = "2px solid #fba";
   else
    champ.style.border = "";
}

function verifMail(champ){
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
    if(!regex.test(champ.value)){
       surligne(champ, true);
       document.getElementById('erreur').innerHTML = 'Adresse email saisie invalide';
       return false;
    }else{
       surligne(champ, false);
       document.getElementById('erreur').innerHTML = '';
       return true;
    }
 }

 function verifpass(champ){
    if(champ.value.length < 6){
       surligne(champ, true);
       document.getElementById('mdp').innerHTML = 'Votre mot de passe doit contenir au moins 6 caratères';
       return false;
    }else{
       surligne(champ, false);
        document.getElementById('mdp').innerHTML = '';
        return true;
    }
 }

function test() {
    if (document.getElementById('Email').value && document.getElementById('inputPassword').value)
        document.getElementById("valid").disabled = false;
    else
        document.getElementById("valid").disabled = true;
}