import React, {Component} from "react";
import LinkedText from "./LinkedText";

export default class SearchList extends Component{
	
	constructor(){
		super();
	}

	render(){

		let nodes = [];

		for( var i = 0; i < 10; i++ ){
			nodes.push(
				<LinkedText 
					class="search-list-item"
					link="http://www.naver.com" 
					text={ "some link" + i }
					key={ "li" + i } />
			);
		}

		return (
			<div>
				{nodes}
			</div>
		);
	}
}