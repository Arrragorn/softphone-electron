

/*ACCUEIL -> CONNEXION */
  function fenetre_conexion(){
      $('#accueil').removeClass('section-active');
      $('#connexion').addClass('section-active');
  };

/*CONNEXION -> DIAL  */
function fenetre_dial(){
    $('#connexion').removeClass('section-active');
    $('#dial').addClass('section-active');

};

/*DIAL -> CALL */
function fenetre_call(){
    $('#dial').removeClass('section-active');
    $('#call').addClass('section-active');

};


/*CALL -> DIAL */
function fenetre_raccrocher(){
    $('#call').removeClass('section-active');
    $('#dial').addClass('section-active');
};


/*CALL -> DIAL */
function fenetre_rediriger(){
    $('#call').removeClass('section-active');
    $('#dial').addClass('section-active');
};


/*GESTION AFFICHAGE MOT DE PASSE*/
const changePasswordView = obj => {
    let el = obj.previousElementSibling;
    let type = el.getAttribute("type");
    switch (type) {
        case "password" :
            el.setAttribute("type", "text");
            break;
        case "text" :
            el.setAttribute("type", "password");
            break;
    }
}

document.querySelectorAll('.view-button').forEach((obj)=>{
    obj.addEventListener('mousedown',()=>{
        changePasswordView(obj);
    });
    obj.addEventListener('mouseup',()=>{
        changePasswordView(obj);
    });
    obj.addEventListener('touchstart',()=>{
        changePasswordView(obj);
    }, { passive: true } );
    obj.addEventListener('touchend',()=>{
        changePasswordView(obj);
    }, { passive: true } );

});

/*GESTION APPARITION FENETRE INCOMING CALL*/

function fenetre_incomingcall(){
    $('#incomingcall').addClass('section-active');
};

/*GESTION BOUTONS FENETRE INCOMING CALL*/

function fenetre_call_accepted(){
    $('section').removeClass('section-active');
    $('#call').addClass('section-active');
    //$("#filtre").css("display", "block");
};

function fenetre_call_refused(){
    $('#incomingcall').classList.remove("section-active");
    $("#filtre").css("display", "none");
};

/*GERER CONNEXION*/

function headerconnecter(){

    $('.codeco').html('Bienvenue <span class="sedeconnecter"> -Se déconnecter</span>')
}

function fenetre_se_connecter(){


    $('section').removeClass('section-active');
 $('#connexion').addClass('section-active');
};

function headerdeconnecter(){
    $('.codeco').html('Bienvenue <span class="seconnecter"> -Se connecter</span>')
};

function fenetre_se_deconnecter(){
  $('section').removeClass('section-active');
  $('#accueil').addClass('section-active');
};

/*GESTION DU DIAL*/

$('.suppr').click(function(){



    if($('#numeroRentrer').val() == "") {
        var anciennum="";
    }
    else {
        var anciennum =String($('#numeroRentrer').val());
    }

    $('#numeroRentrer').val(anciennum+numero);
});

    $('.num').click(function(){

        var numero =$(this).children(0).html();

        if($('#numeroRentrer').val() == "") {
            var anciennum="";
        }
        else {
            var anciennum =String($('#numeroRentrer').val());
        }

        $('#numeroRentrer').val(anciennum+numero);
    });
