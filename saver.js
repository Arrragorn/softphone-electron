const storage = require('electron-json-storage');
const app = require('electron').remote.app;
const CryptoJS = require("crypto-js");

storage.setDataPath(app.getPath('userData'));

const dataPath = storage.getDataPath();
console.log(dataPath);

var identifiant;
var encrypted_password;
var password;
var server;
var port;


function get_saved_identifiant(callback){

	storage.get('identifiant', function(error, data) {
	  if (error) throw error;
	  console.log(data);
      callback (data.identifiant_saved);
	});
}

function get_saved_mdp(callback){

	storage.get('encrypted_password', function(error, data) {
	  if (error) throw error;
	  console.log(data.MDP);
	  var motte = desencypt(data.MDP)
	  console.log(motte);
	  callback (motte);
	});
}

function get_saved_adressseServ(callback){

	storage.get('server', function(error, data) {
	  if (error) throw error;
	  callback (data.addr_server)
	});
}

function get_saved_port(callback){
	storage.get('port', function(error, data) {
	  if (error) throw error;
	  callback (data.num_port)
	});
}

function set_identifiant(identifiant){

	storage.set('identifiant', { 'identifiant_saved' : identifiant }, function(error) { 
	  if (error) throw error;
	});
}

function set_encrypted_password(password){

	encrypted_password = encrypt(password);
	console.log(encrypted_password)
	storage.set('encrypted_password', { 'MDP' : encrypted_password }, function(error) {
	  if (error) throw error;
	});
}

function set_server(server){

	storage.set('server', { 'addr_server': server }, function(error) { 
	  if (error) throw error;
	});
}

function set_port(port){
	storage.set('port', { 'num_port': port }, function(error) {
	  if (error) throw error;
	});
}

function encrypt(password){

	encrypted_password = CryptoJS.AES.encrypt(password, 'secret key 123').toString();

	return encrypted_password;
}

function desencypt(encrypted_password){

	var bytes = CryptoJS.AES.decrypt(encrypted_password, 'secret key 123');
	password = bytes.toString(CryptoJS.enc.Utf8);

	return password;
}

