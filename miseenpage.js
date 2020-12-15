

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
    $("#filtre").css("display", "block");
};

/*GESTION BOUTONS FENETRE INCOMING CALL*/

function fenetre_call_accepted(){
    $('section').removeClass('section-active');
    $('#call').addClass('section-active');
    $("#filtre").css("display", "none");
};

function fenetre_call_refused(){
    $('#incomingcall').removeClass("section-active");
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

    var str = String($('#numeroRentrer').val());
    var newStr = str.slice(0,-1);
    $('#numeroRentrer').val(newStr);

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


/*GESTION CLAVIER DURANT APPEL*/

    /*RETOUR DIAL DEPUIS CALL*/
    function fenetre_retour_diall(){
        $('#call').removeClass('section-active');
        $('#dial').addClass('section-active');

        $('#button_appel').html('<svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_ddd)"><circle cx="57.5" cy="56.5" r="39.5" fill="#00B0FF"/><path d="M65.0188 54.625H42.5V58.375H65.0188V64L72.5 56.5L65.0188 49V54.625Z" fill="white"/></g></svg>');
    };

    /*RETOUR CALL DEPUIS DIAL*/
    function fenetre_retour_call(){
        $('#dial').removeClass('section-active');
        $('#call').addClass('section-active');

        $('#button_appel').html('<svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="57.5" cy="56.5" r="39.5" fill="#00B0FF" /><path d="M48.2161 54.401C50.7995 59.4062 54.5938 63.2005 59.599 65.7839L63.3932 61.9896C63.9314 61.4514 64.5234 61.3168 65.1693 61.5859C67.1068 62.2318 69.1519 62.5547 71.3047 62.5547C71.7891 62.5547 72.1927 62.7161 72.5156 63.0391C72.8385 63.362 73 63.7656 73 64.25V70.3047C73 70.7891 72.8385 71.1927 72.5156 71.5156C72.1927 71.8385 71.7891 72 71.3047 72C63.2318 72 56.316 69.1476 50.5573 63.4427C44.8524 57.684 42 50.7682 42 42.6953C42 42.2109 42.1615 41.8073 42.4844 41.4844C42.8073 41.1615 43.2109 41 43.6953 41H49.75C50.2344 41 50.638 41.1615 50.9609 41.4844C51.2839 41.8073 51.4453 42.2109 51.4453 42.6953C51.4453 44.8481 51.7682 46.8932 52.4141 48.8307C52.6293 49.5304 52.4948 50.1224 52.0104 50.6068L48.2161 54.401Z" fill="white" /></svg>')

    };
