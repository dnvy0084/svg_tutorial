
import React from "react";
import ReactDom from 'react-dom';
import FilterableProductTable from "./FilterableProductTable";

const data = [
	{category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
	{category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
	{category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
	{category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
	{category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
	{category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class Entry{

	constructor( products ){

		this.dom = document.createElement( "content" );

		ReactDom.render(
			<div className="filterable-product-table-entry" id="product-root">
				<h1>ProductTable</h1>
				<FilterableProductTable products={products}/>
			</div>, 
			this.dom
		);
	}

}//class

document.getElementById( "content" ).appendChild( new Entry( data ).dom );