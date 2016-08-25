import $ from "jquery";

const URL = "http://10.67.16.21:8080/";

export default class DataBinder{
	
	constructor(){
		super();
	}

	request( type, query ){

		query = encodeURI( query );
		
		$.ajax({
			url: [ URL, type, "?query=", query ].join( "" ),
			dataType: "text",
			cache: false,
			success: (data)=>{
				console.log(data);
			},
			error: (xhr, status, err)=>{
				console.error( query, status, err.toString() );
			}
		});
	}


	render(){
		return (
			<div className="data-binder">
				<QueryInput onSubmit={this.onSubmit} type="movie" />
			</div>
		);
	}

} //class

const props = Object.create( onSubmit );

DataBinder.defaultProps = props;