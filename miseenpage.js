/*ACCUEIL -> CONNEXION */
function fenetre_connexion(){
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


/*GESTION APPARITION FENETRE INCOMING CALL*/

function fenetre_incomingcall(){

    $('#incommingcall').addClass('section-active');

};

/*GESTION BOUTONS FENETRE INCOMING CALL*/

function fenetre_call2(){
    $('section').removeClass('section-active');
    $('#call').addClass('section-active');
};

function fenetre_raccrocher2(){
    $('#incomingcall').classList.remove("section-active");
};

/*GERER CONNEXION*/

function headerconnecter(){

    $('.codeco').html('<span class="sedeconnecter"> -Se déconnecter</span>')
    $('.sedeconnecter').click(function(){
        $('section').removeClass('section-active');
        $('#accueil').addClass('section-active');
    });

}

function headerdeconnecter(){

    $('.codeco').html('<span class="seconnecter"> -Se connecter</span>')
    $('.seconnecter').click(function(){
           $('section').removeClass('section-active');
        $('#connexion').addClass('section-active');
    });

};
 


/*GESTION DU DIAL*/

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
        
 


