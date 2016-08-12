"use strict";

var electron = require( "electron" ),
	app = electron.app,
	BrowserWindow = electron.BrowserWindow;

var win = null;

app.on( "ready", function(){

	win = new BrowserWindow( { width: 1600, height: 1024 } );

	win.loadURL( "file://" + __dirname + "/src/index.html" );
	win.webContents.openDevTools();

	win.on( "closed", function(){
		app.quit();
		win = null;
	});
});