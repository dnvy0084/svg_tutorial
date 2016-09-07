import React, {Component} from "react";
import SearchList from "./SearchList";
import QueryInput from "./QueryInput";
import DataBinder from "../net/DataBinder";
import {xmlToJSON} from "../utils/utils";

export default class MovieSearchList extends Component{
	
	constructor(){
		super();

		this.onSubmit = this.onSubmit.bind(this);
		this.dataBinder = new DataBinder();

		this.data = {};

		this.state = {
			dataprovider: this.data
		};
	}

	onSubmit( type, query ){
		
		this.dataBinder.request({
			type: type,
			query: { 
				query: query
			},
			success: (data)=>{ this.appendData( data ) },
			error: (xhr, status, err)=>{
				console.error( status + ":" + err.toString() );
			}
		});
	}

	appendData( data ){

		this.data = xmlToJSON( data ).channel;

		this.setState({ 
			dataprovider: this.data
		});
	}

	render(){
		return (
			<div className="movie-search-list">
				<QueryInput onSubmit={this.onSubmit} type="movie" />
				<SearchList dataprovider={this.state.dataprovider}/>
			</div>
		);
	}
}