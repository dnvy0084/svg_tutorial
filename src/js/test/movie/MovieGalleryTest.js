import React from "react";
import ReactDOM from "react-dom";
import MovieSearchList from "./comps/MovieSearchList";

ReactDOM.render(
	<div>
		<h1>Movie Search</h1>
		<MovieSearchList />
	</div>,
	document.getElementById( "wrapper" )
);