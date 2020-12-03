
const JsSIP = require('jssip')
var  coolPhone
var session

document.getElementById('button_appel').addEventListener('click', appel);
document.getElementById('button_connexion_form').addEventListener('click', connect);
document.getElementById('button_raccrocher').addEventListener('click', racroche);
//document.getElementById('bouton_repondre').addEventListener('click', repondre);
document.getElementById('button_rediriger').addEventListener('click', redirige);
document.getElementById('button_decrocher2').addEventListener('click', repondre);
document.getElementById('button_raccrocher2').addEventListener('click', racroche);


function racroche(){

if(session){
  session.terminate()
  fenetre_raccrocher2()
  }
}

function appel(){
  var eventHandlers = {
    'progress': function(e) {
      console.log('call is in progress');
    },
    'failed': function(e) {
      console.log('call failed with cause: '+ e.data.cause);
    },
    'ended': function(e) {
      console.log('call ended with cause: '+ e.data.cause);
    },
    'confirmed': function(e) {
      console.log('call confirmed');
    }
  };

  var options = {
    'eventHandlers'    : eventHandlers,
    'mediaConstraints' : { 'audio': true, 'video': false }
  };

  var num = document.getElementById('numeroRentrer').value

  console.log(num);
    coolPhone.call('sip:' + String(num) +'@do01.adninformatique.com', options);
}

function repondre(){
if(session)
{
  session.answer()
  if(session.connection)
  {
    session.connection.addEventListener('addstream',ajoute_stream);
  }
}


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
      incomingcall()
    } else {
      session.connection.addEventListener('addstream',ajoute_stream);
    }
  });
  coolPhone.start();

}

function ajoute_stream(e){
  var audio = document.createElement('audio');
  audio.srcObject = e.stream;
  audio.play();
}
