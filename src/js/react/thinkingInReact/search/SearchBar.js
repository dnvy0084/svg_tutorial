
import React, {Component} from "react";

export default class SearchBar extends Component{
	
	constructor(){

		super();

		this.onChange = this.onChange.bind(this);
	}

	onChange(e){

		let filter = this.refs.textInput.value,
			inStockOnly = this.refs.checkboxInput.checked;

		this.props.onUserInput( filter, inStockOnly );
	}

	render(){
		return (
			<form className="search-bar">

				<input type="text" 
					className="search-bar-textinput"
					placeholder="Search.." 
					value={this.props.filter}
					onChange={this.onChange}
					ref="textInput" />

				<div className="search-bar-checkbox">
					<input type="checkbox" 
						checked={this.props.inStockOnly}
						onChange={this.onChange}
						ref="checkboxInput" />
					{" "}
					only show poducts in stock
				</div>

			</form>
		);		
	}

} //class

Component.defaultProps = {
	onUserInput: ()=>{},
	inStockOnly: false,
	filter: ""
}