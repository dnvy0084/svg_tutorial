
import React, {Component} from "react";

export default class ProductRow extends Component{
	
	constructor(){
		super();
	}

	render(){

		let nameclass = "product-row-name",
			priceclass = "product-row-price";

		if( this.props.stocked ){
			nameclass += "-stocked";
			priceclass += "-stocked";
		}

		return (
			<tr className="product-row">
				<td className={nameclass}>
					{this.props.name}
				</td>
				<td className={priceclass}>
					{this.props.price}
				</td>
			</tr>
		);
	}

}//class