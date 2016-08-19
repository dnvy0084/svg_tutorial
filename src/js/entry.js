
var underElectron = navigator.userAgent.indexOf( "Electron" ) > -1;

if( underElectron ){

	require( "babel-core/register" )();
	require( "./js/delegate.js" )();

	// document.body.innerHTML = "<div style='font-weight:bold; font-size: 30px; color: red'>사랑해 김라희!</div>"
	// 					    + "<div style='font-weight:bold; font-size: 30px; color: yellow'>사랑해 김라온!</div>"
	// 					    + "<img width='400' height='260' src='img/img.jpg'>";

}else{

	console.warn( "general browser - you have to excute under electron-browser for this app!" );
}