
import React, {Component} from "react";
import ProductTable from "./node/ProductTable";
import SearchBar from "./search/SearchBar";

export default class FilterableProductTable extends Component{

	constructor(){
		super();

		this.state = {
			filter: "",
			inStockOnly: false
		};

		this.onUserInput = this.onUserInput.bind(this);
	}

	onUserInput(filter, inStockOnly){

		this.setState({
			filter: filter,
			inStockOnly: inStockOnly
		});
	}

	render(){
		return (
			<div className="filterable-product-table"> 

				<SearchBar {...this.state}
					onUserInput={this.onUserInput} />

				<ProductTable {...this.state} 
					products={this.props.products} />

			</div>
		);
	}

}// class;