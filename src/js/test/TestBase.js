let React = require( "react" ),
	ReactDom = require( "react-dom" );

export default class TestBase{

	constructor(){

		this.start();
	}

	start(){

		var section = document.createElement( "section" );

		document.body.appendChild( section );

		ReactDom.render(

			<h1>Hello, world!</h1>,
			section
		);
	}

}// class