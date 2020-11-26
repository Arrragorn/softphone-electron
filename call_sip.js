
const JsSIP = require('jssip')
var  coolPhone


bouton_call.onclick = function(){
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

    var session = coolPhone.call('sip:9001@do01.adninformatique.com', options);

    if (session) {
      session.connection.addEventListener('addstream', (e) => {
        var audio = document.createElement('audio');
        audio.srcObject = e.stream;
        audio.play();
      });
    }

    console.log(session);
}

bouton_connect.onclick = function(){
  var socket = new JsSIP.WebSocketInterface('wss://do01.adninformatique.com:8089/ws');
    var configuration = {
    sockets  : [ socket ],
    uri      : 'sip:antoineTest@do01.adninformatique.com',
    password : 'adminTest'
  };

  coolPhone = new JsSIP.UA(configuration);



  coolPhone.start();

  coolPhone.on('newMessage', function(e){ console.log(e); });

}



bouton_message.onclick = function(){
  coolPhone.sendMessage('sip:9001@do01.adninformatique.com', 'woot');
}
