
const JsSIP = require('jssip')
var  coolPhone
var session

document.getElementById('button_appel').addEventListener('click', appel);
document.getElementById('button_connexion_form').addEventListener('click', connect);

document.getElementById('button_rediriger').addEventListener('click', redirige);
document.getElementById('button_repondre').addEventListener('click', repondre);
document.getElementById('button_refuser_appel').addEventListener('click', refuser_appel);
document.getElementById('button_raccrocher').addEventListener('click', racroche);


function racroche(){
  session.terminate();
}
function refuser_appel(){
  session.terminate();
  fenetre_call_refused();
}


function appel(){

  var options = {
  //  'eventHandlers'    : eventHandlers,
    'mediaConstraints' : { 'audio': true, 'video': false }
  };

  var num = document.getElementById('numeroRentrer').value

  console.log(num);
    coolPhone.call('sip:' + String(num) +'@do01.adninformatique.com', options);
}

function repondre(){
    session.answer();
    session.connection.addEventListener('addstream',ajoute_stream);
    fenetre_call_accepted();
}

function redirige(){
}


 function connect(){
  var socket = new JsSIP.WebSocketInterface('wss://do01.adninformatique.com:8089/ws');
    var configuration = {
    sockets  : [ socket ],
    uri      : 'sip:antoineTest@do01.adninformatique.com',
    password : 'adminTest'
  };


  coolPhone = new JsSIP.UA(configuration);
  coolPhone.on('newRTCSession',(data) => {
    session = data.session
    console.log("newRTCSession");
    if(session.direction === "incoming"){

      console.log("incoming");
      fenetre_incomingcall();
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
  });
  coolPhone.on('unregistered',(data) => {
    headerdeconnecter();
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
