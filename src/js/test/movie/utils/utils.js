
/**
 * each
 * @param  {[type]} collection [description]
 * @param  {[type]} iterator   [description]
 * @return {[type]}            [description]
 */
export function each( collection, iterator ){

	if( collection instanceof Array ){

		collection.forEach( iterator );
	}
	else{

		for( var key in collection ){

			iterator( collection[key], key, collection );
		}
	}
}

/**
 * map
 * @param  {[type]} collection [description]
 * @param  {[type]} iterator   [description]
 * @return {[type]}            [description]
 */
export function map( collection, iterator ){

	if( collection instanceof Array )
		return collection.map( iterator );
	
	let map = {};

	each( collection, ( _, key, collection )=>{

		map[ key ] = iterator( _, key, collection );
	});

	return map;
}

/**
 * reduce
 * @param  {[type]} collection [description]
 * @param  {[type]} iterator   [description]
 * @param  {[type]} initValue  [description]
 * @return {[type]}            [description]
 */
export function reduce( collection, iterator, initValue ){

	if( collection instanceof Array )
		return collection.reduce( iterator, initValue );

	each( collection, ( _, key, collection )=>{

		initValue = iterator( _, initValue, key, collection );
	});

	return initValue;
}

/**
 * filter
 * @param  {[type]} collection [description]
 * @param  {[type]} iterator   [description]
 * @return {[type]}            [description]
 */
export function filter( collection, iterator ){

	if( collection instanceof Array )
		return collection.filter( iterator );

	let filter = {};

	each( collection, (_, key, collection )=>{

		if( !iterator(_, key, collection) ) return;

		filter[ key ] = _;
	});

	return filter;
}

/**
 * stringToXML
 * @param  {[type]} xmlString [description]
 * @return {[type]}           [description]
 */
export function stringToXML( xmlString ){

	return new DOMParser().parseFromString( xmlString, "text/xml" );
}

/**
 * xmlToJSON
 * @param  {[type]} xml [description]
 * @return {[type]}     [description]
 */
export function xmlToJSON( xml ){

	if( typeof xml == "string" )
		xml = stringToXML( xml );

	return xmlNodeToJSON( xml.documentElement );
}

/**
 * xmlNode To JSON
 * @param  {[type]} node [description]
 * @return {[type]}      [description]
 */
export function xmlNodeToJSON( node ){

	let json = {};

	if( node.childElementCount == 0 )
		return decodeURI( (( node.childNodes[0] || [] ).nodeValue || "" ).replace( /\<[^\>]+\>/g, '' ) );

	each( node.attributes, (attr, key, collection)=>{

		if( !collection.hasOwnProperty( key ) ) return;

		json[ "@" + attr.name ] = attr.value;
	});

	each( node.children, ( childNode, key, collection )=>{

		if( !collection.hasOwnProperty( key ) ) return;

		let tagName = childNode.tagName,
			childJSON = xmlNodeToJSON( childNode ),
			tags;

		if( json.hasOwnProperty( tagName ) && !(json[tagName] instanceof Array) ){

			tags = [];
			tags.push( json[ tagName ] );
			json[ tagName ] = tags;
		}
		
		json[ tagName ] instanceof Array ? 
			json[ tagName ].push( childJSON ) : json[ tagName ] = childJSON;
	});

	return json;
}

