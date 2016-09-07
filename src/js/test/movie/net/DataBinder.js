import $ from "jquery";
import {map, reduce, filter} from "../utils/utils";

const URL = "http://10.67.16.21:8080/";

export default class DataBinder{
	
	constructor(){

	}

	request( options ){

		let type = options.type,
			query = reduce( 
				map( options.query, (q)=>{ return encodeURI(q) } ),
				(a, b, key)=>{ return b + key + "=" + a + "&" },
				"?"
			);
		
		$.ajax({
			url: [ URL, type, query ].join( "" ),
			dataType: "text",
			cache: false,
			success: options.success,
			error: options.error
		});
	}

} //class