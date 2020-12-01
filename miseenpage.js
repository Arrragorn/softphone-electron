/*ACCUEIL -> CONNEXION */
document.querySelector('#button_connexion').addEventListener('click',function(){
    document.querySelector('#accueil').classList.remove("section-active");
    document.querySelector('#connexion').classList.add("section-active");

});

/*CONNEXION -> DIAL  */
document.querySelector('#button_connexion_form').addEventListener('click',function(){
    document.querySelector('#connexion').classList.remove("section-active");
    document.querySelector('#dial').classList.add("section-active");

});

/*DIAL -> CALL */
document.querySelector('#button_appel').addEventListener('click',function(){
    document.querySelector('#dial').classList.remove("section-active");
    document.querySelector('#call').classList.add("section-active");

});

/*CALL -> DIAL */
document.querySelector('#button_raccrocher').addEventListener('click',function(){
    document.querySelector('#call').classList.remove("section-active");
    document.querySelector('#dial').classList.add("section-active");

});

/*CALL -> DIAL */
document.querySelector('#button_rediriger').addEventListener('click',function(){
    document.querySelector('#call').classList.remove("section-active");
    document.querySelector('#dial').classList.add("section-active");

});

/*GESTION APPARITION FENETRE INCOMING CALL*/

function incomingcall(){
    document.querySelector('#incomingcall').classList.add("section-active");    
}

/*GESTION BOUTONS FENETRE INCOMING CALL*/

document.querySelector('#button_appel2').addEventListener('click',function(){
    document.querySelectorAll(section).classList.remove("section-active");
    document.querySelector('#call').classList.add("section-active");
});

document.querySelector('#button_raccrocher2').addEventListener('click',function(){
    document.querySelector('#incomingcall').classList.remove("section-active");
});


if(document.querySelector('#').classList.contains('section-active')){
    console.log("lel");

    document.querySelectorAll('.num').addEventListener('click',function(){
    
        var numero = this.value;
        console.log(numero);
       
    });
    
};

