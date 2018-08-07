import React, {Component} from 'react';

export default class SingleContainer extends Component {
	constructor(props) {
		super(props)
	}

	renderData() {
		// .filter to active 
		return (
			this.props.data.map((e) => {
				return(
					<span key={e.id}>{e.id}{e.s3_standard}</span>
				)
			})
		)
	}

	render() {
		return(
			  <div className="card-body">
				{this.renderData()}
			  </div>
		)
		
	}
}
