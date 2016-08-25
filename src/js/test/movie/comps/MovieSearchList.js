import React, {Component} from "react";
import SearchList from "./SearchList";
import QueryInput from "./QueryInput";

export default class MovieSearchList extends Component{
	
	constructor(){
		super();

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit( type, query ){
		
	}

	render(){
		return (
			<div className="movie-search-list">
				<QueryInput onSubmit={this.onSubmit} />
				<SearchList />
			</div>
		);
	}
}