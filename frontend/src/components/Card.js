import { Component } from 'react'

class Card extends Component {

	render(){
		return (
			<div style={styles.card}>
				{this.props.city} <br />
				{this.props.customersTotal}
			</div>
		);
	}
}

const styles = {
	card: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}
}

export default Card;
