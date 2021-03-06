const { app, BrowserWindow } = require('electron')
if (require('electron-squirrel-startup')) return app.quit();


function createWindow () {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })

  win.loadFile('index.html')

}

app.whenReady().then(createWindow)

// app.on('ready', () => {
//   var options = new Object()
//   options.certificate = "/home/antoine/Documents/UQAC/20A/MethGin/softphone_electron/asterisk_server_certificate.pem"
//     app.importCertificate(options, (result) => {
//     console.log(result);
//   });
// })
//
// app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
//     // On certificate error we disable default behaviour (stop loading the page)
//     // and we then say "it is all fine - true" to the callback
//     event.preventDefault();
//     callback(true);
// });

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


// app.on('certificate-error', (event, webContents, url, error, certificate,
// callback) => {
//   event.preventDefault();
//   callback(true);
// });

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }





})
