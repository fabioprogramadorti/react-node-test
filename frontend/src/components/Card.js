import { Component } from 'react'
import '../styles/card.css'


class Card extends Component {

	render(){
		return (

			<div class="card card--fixedSize">
				<div class="card__description">
					<div class="icon fa fa-flask card__descriptionIcon"></div>
					<div class="card__descriptionText">{this.props.city}</div>
				</div>
				<div class="card__number">Total: {this.props.customersTotal}</div>
			</div>
		);
	}
}

export default Card;
