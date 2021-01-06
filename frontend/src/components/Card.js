import { Component } from 'react'

class Card extends Component {

	render(){
		return (
			<div>
				{this.props.city} <br />
				{this.props.customersTotal}
			</div>
		);
	}
}

export default Card;
