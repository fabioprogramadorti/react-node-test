import { Component } from 'react'
import '../styles/card.css'


class Card extends Component {

	render(){
		return (

			<div className="card card--fixedSize">
				<div className="card__description">
					<div className="icon fa fa-flask card__descriptionIcon"></div>
					<div className="card__descriptionText">{this.props.city}</div>
				</div>
				<div className="card__number">Total: {this.props.customersTotal}</div>
			</div>
		);
	}
}

export default Card;
