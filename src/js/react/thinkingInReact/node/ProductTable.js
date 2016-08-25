import React, {Component} from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
		
export default class ProductTable extends Component{
	
	constructor(){
		super();
	}

	render(){

		let rows = [],
			lastCategory = "";

		this.props.products.forEach((product)=>{

			if( this.props.inStockOnly && !product.stocked ) return;
			if( product.name.toLowerCase().indexOf( this.props.filter.toLowerCase() ) == -1 ) return; 

			if( lastCategory != product.category ){

				rows.push(
					<ProductCategoryRow category={product.category} key={product.category}/>
				);

				lastCategory = product.category;
			}

			rows.push(
				<ProductRow {...product} key={product.name}/>
			);
		});

		return (
			<table className="product-table">
				<thead className="product-table-head">
					<tr className="product-table-head-header">
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead> 
				<tbody className="product-table-body">
					{rows}
				</tbody>
			</table>
		);
	}

} //class

ProductTable.defaultProps = {
	products: [],
	filter: "",
	inStockOnly: false
};