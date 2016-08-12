
var underElectron = navigator.userAgent.indexOf( "Electron" ) > -1;

if( underElectron ){

	require( "babel-core/register" )();
}
else{

	console.warn( "general browser - you have to excute under electron browser for this app!" );
}