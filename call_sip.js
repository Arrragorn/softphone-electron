
const JsSIP = require('jssip')
var  coolPhone
var session

document.getElementById('bouton_call').addEventListener('click', appel);
document.getElementById('bouton_connect').addEventListener('click', connect);
document.getElementById('bouton_racrocher').addEventListener('click', racroche);
document.getElementById('bouton_repondre').addEventListener('click', repondre);



function racroche(){

if(session){
  session.terminate()
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

  var num = input_num_tele.value

    session = coolPhone.call('sip:' + num +'@do01.adninformatique.com', options);

    if (session) {
      bouton_racrocher.onclick = function(){
        session
      }
      session.connection.addEventListener('addstream', (e) => {
        var audio = document.createElement('audio');
        audio.srcObject = e.stream;
        audio.play();
      });
    }

    console.log(session);
}

function repondre(){

}

 function connect(){
  var socket = new JsSIP.WebSocketInterface('wss://do01.adninformatique.com:8089/ws');
    var configuration = {
    sockets  : [ socket ],
    uri      : 'sip:antoineTest@do01.adninformatique.com',
    password : 'adminTest'
  };

  coolPhone = new JsSIP.UA(configuration);
  coolPhone.start();

}
