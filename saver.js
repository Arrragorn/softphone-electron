const defaultDataPath = storage.getDefaultDataPath()
const os = require('os');
const storage = require('electron-json-storage');
 
storage.setDataPath(os.tmpdir());

const dataPath = storage.getDataPath();
console.log(dataPath);

var identifiant;
var encrypted_password;
var password;
var server;
var port;

function get_saved_identifiant(){

	storage.get('identifiant', function(error, data) {
	  if (error) throw error;
 
	  identifiant = data;
	  console.log(data);
	  return identifiant
	});
}

function get_saved_mdp(){

	storage.get('encrypted_password', function(error, data) {
	  if (error) throw error;
 
	  encrypted_password = data;

	  password = desencypt(encrypted_password);

	  console.log(data);
	  return password;
	});
}

function get_saved_server(){

	storage.get('server', function(error, data) {
	  if (error) throw error;
 
	  server = data;
	  console.log(data);
	  return server;
	});
}

function get_saved_port(){
	storage.get('port', function(error, data) {
	  if (error) throw error;
 
	  port = data;
	  console.log(data);
	  return port
	});
}

function set_identifiant(identifiant){

	storage.set('identifiant', { 'identifiant' : 'identifiant' }, function(error) { 
	  if (error) throw error;
	});
}

function set_encrypted_password(password){

	encrypted_password = encrypt(password);

	storage.set('encrypted_password', { 'MDP' : 'encrypted_password' }, function(error) {
	  if (error) throw error;
	});
}

function set_server(server){

	storage.set('server', { 'server': 'server' }, function(error) { 
	  if (error) throw error;
	});
}

function set_port(port){
	storage.set('port', { 'port': 'port' }, function(error) {
	  if (error) throw error;
	});
}

function encrypt(password){

	encrypted_password = CryptoJS.AES.encrypt(password, 'secret key 123');

	return encrypted_password;
}

function desencypt(encrypted_password){

	var bytes = CryptoJS.AES.decrypt(encrypted_password.toString(), 'secret key 123');
	password = bytes.toString(CryptoJS.enc.Utf8);

	return password;
}

