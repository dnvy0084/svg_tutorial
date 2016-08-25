
var https = require( "https" ),
	http = require( "http" ),
	stream = require( "stream" );

var options = {

	hostname: "openapi.naver.com",
	port: 443,
	path: "/v1/search/movie.xml",
	method: "GET",
	headers: {
		'X-Naver-Client-Id': 'mPoltG5IBWUeFqYF0PP2',
		'X-Naver-Client-Secret': '1tWAAEU_Yd'
	}
};

const ResponseHeader = {
	'Content-Type': 'text/xml',
	'Access-Control-Allow-Origin': 'http://localhost:8090'
};

http.createServer().on( "request", validate ).listen( 8080 );

function validate( req, res ){

	var url = req.url,
		path = ( url.match( /\/[^&?]+/g ) || [] )[0];

	switch( path ){

		case "/movie":
			pipe( 
				appendQuery( options , (url.match( /\?.+/g )||[])[0] ),
				res 
			);
			break;

		default: 
			responseWrongAPI( res );
			break;
	}
}

function pipe( reqOpts, res ){

	res.writeHead( 200, ResponseHeader );

	https.request( reqOpts, function( apiResponse ){

		apiResponse.setEncoding( "utf8" );
		apiResponse.pipe( res );
		
	}).end();
}

function appendQuery( options, query ){

	var o = {};

	for( var key in options ){
		o[key] = options[key];
	}

	o.path += query;

	return o;
}

function responseWrongAPI( res ){

	res.writeHead( 404, {} );
	res.end( 'Wrong API' );
}