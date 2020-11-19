
const JsSIP = require('jssip')



  bo_bouton.onclick = function(){
    // Create our JsSIP instance and run it:



    var socket = new JsSIP.WebSocketInterface('wss://do01.adninformatique.com:8089/ws');
    var configuration = {
      sockets  : [ socket ],
      uri      : 'sip:antoineTest@do01.adninformatique.com',
      password : 'adminTest'
    };

    var  coolPhone = new JsSIP.UA(configuration);

    coolPhone.start();

    // Register callbacks to desired call events
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



    coolPhone.on('newMessage', function(e){ console.log(e); });




    coolPhone.sendMessage('sip:9002@do01.adninformatique.com', 'woot');

    var options = {
      'eventHandlers'    : eventHandlers,
      'mediaConstraints' : { 'audio': true, 'video': true }
    };

      var session = coolPhone.call('sip:9002@do01.adninformatique.com', options);



  };
