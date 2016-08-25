
import React, {Component} from "react";

export default class ProductCategoryRow extends Component{

	constructor(){
		super();
	}

	render(){
		return (
			<tr className="product-category-row">
				<th colSpan="2">{this.props.category}</th>
			</tr>
		);
	}

}//class