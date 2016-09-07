import React, {Component} from "react";

export default class SearchListItem extends Component{
	
	constructor(){
		super();
	}

	render(){

		let item = this.props.item;

		return (
			<li className="search-list-item">
				<h3><a href={item.link} target='blank'>{item.title}</a></h3>
				<img src={item.image} />
				<table>
					<tbody>
						<tr>
							<td className='bold'>sub title</td>
							<td>{item.subtitle}</td>
						</tr>
						<tr>
							<td className='bold'>director</td>
							<td>{item.director}</td>
						</tr>
						<tr>
							<td className='bold'>actor</td>
							<td>{item.actor}</td>
						</tr>
						<tr>
							<td className='bold'>user rating</td>
							<td>{item.userRating}</td>
						</tr>
						<tr>
							<td className='bold'>publish</td>
							<td>{item.pubDate}</td>
						</tr>
					</tbody>
				</table>
			</li>
		);
	}
}