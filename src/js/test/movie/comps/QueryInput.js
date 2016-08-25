import React, {Component} from "react";
		
export default class QueryInput extends Component{
	
	constructor(){
		super();

		this.onClick = this.onClick.bind(this);	
	}

	onClick(e){

		e.preventDefault();
		
		this.props.onSubmit( this.refs.queryInput.value )
	}

	render(){
		return (
			<form className="query-input">
				<input type="text" className="query-input-text"
					ref="queryInput" />
				<input type="submit" className="query-input-submit"
					onClick={this.onClick} />
			</form>
		);
	}	

} //class

QueryInput.defaultProps = {
	onSubmit: ( query )=>{ console.log( "onSubmit", query ) }
}