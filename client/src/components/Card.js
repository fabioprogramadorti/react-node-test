import { Component } from 'react'


class Card extends Component {

	render(){
		return (
			<div class="row">
				<div class="col-sm-6">
						<div className="card text-center" style={{width: '13rem', marginBottom: '10px'}}>
							<div className="card-header">{this.props.city}</div>
							<div class="card-body">
								<h6 class="card-title mb-2 text-muted">{this.props.customersTotal} customers</h6>
							</div>
						</div>
				</div>
			</div>
			
		);
	}
}

export default Card;
