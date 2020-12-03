/*ACCUEIL -> CONNEXION */
$('#button_connexion').click(function(){
    $('#accueil').removeClass('section-active');
    $('#connexion').addClass('section-active');

});

/*CONNEXION -> DIAL  */
$('#button_connexion_form').click(function(){
    $('#connexion').removeClass('section-active');
    $('#dial').addClass('section-active');

});

/*DIAL -> CALL */
$('#button_appel').click(function(){
    $('#dial').removeClass('section-active');
    $('#call').addClass('section-active');

});

/*CALL -> DIAL */
$('#button_raccrocher').click(function(){
    $('#call').removeClass('section-active');
    $('#dial').addClass('section-active');

});

/*CALL -> DIAL */
$('#button_rediriger').click(function(){
    $('#call').removeClass('section-active');
    $('#dial').addClass('section-active');

});

/*GESTION APPARITION FENETRE INCOMING CALL*/

function incomingcall(){

    $('#incommingcall').addClass('section-active');

}

/*GESTION BOUTONS FENETRE INCOMING CALL*/

$('#button_appel2').click(function(){
    $('section').removeClass('section-active');
    $('#call').addClass('section-active');

});

$('#button_raccrocher2').click(function(){
    $('#incomingcall').classList.remove("section-active");
});



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
        
 


function endingcall(){
    document.querySelector('#incomingcall').classList.remove("section-active");
}
