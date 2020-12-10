
const JsSIP = require('jssip')
var  coolPhone
var session

var server_val;
var identifiant_val;
var mdp_val;
var port_val;

document.getElementById('button_appel').addEventListener('click', appel);
document.getElementById('button_connexion_form').addEventListener('click', connect);

document.getElementById('button_rediriger').addEventListener('click', redirige_dial);
document.getElementById('button_repondre').addEventListener('click', repondre);
document.getElementById('button_refuser_appel').addEventListener('click', refuser_appel);
document.getElementById('button_raccrocher').addEventListener('click', racroche);
document.getElementById('button_connexion').addEventListener('click', quitter_acceuil);


document.querySelector('.seconnecter').addEventListener('click', se_connecter);


function se_connecter(){
   fenetre_se_connecter();
}

function se_deconnecter(){
  fenetre_se_deconnecter();
  coolPhone.unregister();
}

window.addEventListener('load', (e)=>{
  get_saved_identifiant(function(data) {
      document.getElementById('identifiant').value = data;
	})

  get_saved_mdp(function(data) {
  document.getElementById('mdp').value = data;
    })

  get_saved_adressseServ(function(data) {
  document.getElementById('adressseServ').value = data;
    })

  get_saved_port(function(data) {
  document.getElementById('port').value = data;
    })
});

function racroche(){
  //l'evenement ended ne se declanche pas si l'appel est en progres
  if(session.isInProgress()){
    fenetre_raccrocher();
  }
  session.terminate();

}
function refuser_appel(){
  session.terminate();
  fenetre_call_refused();
}

function quitter_acceuil(){
  fenetre_conexion();
}


//seulement pour test, non fonctionnel
/*function get_saved_mdp(){
  return 'adminTest'
}

function get_saved_identifiant(){
  return 'antoineTest'
}

function get_saved_adressseServ(){
  return 'do01.adninformatique.com'
}

function get_saved_port(){
  return '8089'
}*/


function appel(){

  var options = {
  //  'eventHandlers'    : eventHandlers,
    'mediaConstraints' : { 'audio': true, 'video': false }
  };

  var num = document.getElementById('numeroRentrer').value

  console.log(num);
    coolPhone.call('sip:' + String(num) +'@' + server_val, options);
}

function repondre(){
    session.answer();
    session.connection.addEventListener('addstream',ajoute_stream);
    fenetre_call_accepted();
}

function redirige_dial(){
  fenetre_raccrocher()
  document.getElementById('button_appel').removeEventListener('click', appel);
  document.getElementById('button_appel').addEventListener('click', redirige);
  session.on('ended',(sessionData) => {
    document.getElementById('button_appel').removeEventListener('click', redirige);
    document.getElementById('button_appel').addEventListener('click', appel);
    console.log("ended");
  });
}


function redirige() {

  var num = document.getElementById('numeroRentrer').value

  console.log('redirection vers ' + String(num));
  session.refer('sip:' + String(num) +'@' + server_val);
  session.terminate()
}

 function connect(){

identifiant_val = document.getElementById('identifiant').value
mdp_val = document.getElementById('mdp').value
port_val = document.getElementById('port').value
server_val = document.getElementById('adressseServ').value



if(identifiant_val == '' || mdp_val == '' || port_val == '' || server_val == ''){
  return;
}

set_identifiant(identifiant_val)
set_encrypted_password(mdp_val)
set_server(server_val)
set_port(port_val)

  var socket = new JsSIP.WebSocketInterface('wss://'+ server_val +':' + port_val +'/ws');
    var configuration = {
    sockets  : [ socket ],
    uri      : 'sip:' + identifiant_val + '@' +server_val ,
    password : mdp_val
  };


  coolPhone = new JsSIP.UA(configuration);
  coolPhone.on('newRTCSession',(data) => {
    session = data.session
    console.log("newRTCSession");
    if(session.direction === "incoming"){
      console.log("incoming");
      fenetre_incomingcall();
      session.on('failed', (sessionData) => {
        console.log('appel reffusé');
        fenetre_call_refused();
      });
    } else {
      session.connection.addEventListener('addstream',ajoute_stream);
      fenetre_call();
    }
    session.on('ended',(sessionData) => {
      console.log("ended");
      fenetre_raccrocher();
    });

  });

  coolPhone.on('registered',(data) => {
    headerconnecter();
    document.querySelector('.sedeconnecter').addEventListener('click', se_deconnecter);

  });
  coolPhone.on('unregistered',(data) => {
    headerdeconnecter();
    document.querySelector('.seconnecter').addEventListener('click', se_connecter);
  });

  coolPhone.start();
  fenetre_dial();
}

function ajoute_stream(e){
  console.log("nouveau stream");
  var audio = document.createElement('audio');
  audio.srcObject = e.stream;
  audio.play();
}
