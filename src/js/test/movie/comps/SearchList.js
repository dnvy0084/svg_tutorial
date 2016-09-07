import React, {Component} from "react";
import SearchListItem from "./SearchListItem";

export default class SearchList extends Component{
	
	constructor(){
		super();
	}

	render(){

		let data = this.props.dataprovider,
			items = data.display > 1 ? data.item : [ data.item ],
			nodes = [];

		items.forEach( (item, i)=>{

			if( !item ) return;

			nodes.push(
				<SearchListItem item={item} key={ "item" + i } />
			);
		})

		return (
			<div className="search-list">
				<h1>{data.title}</h1>
				<ul>
					{nodes}
				</ul>
			</div>
		);
	}
}