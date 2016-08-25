import React, {Component} from "react";

export default class LinkedText extends Component{
	
	constructor(){
		super();
	}

	render(){
		return (
			<li className={this.props.class}>
				<a href={this.props.link}>
					{this.props.text}
				</a>
			</li>	
		);
	}

}//class