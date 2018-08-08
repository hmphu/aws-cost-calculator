import React, {Component} from 'react';

export default class SingleContainer extends Component {
	constructor(props) {
		super(props)
	}

	renderData() {
		const propR = this.props;
		console.log(propR)
		console.log()
		// const filterActiveName = 
		const filterActivePrice = (propR.resource.data.filter((e) => (e.id == propR.active)))[0];

		// .filter to active 
		return (
			<p>{propR.resource.type} {filterActivePrice.s3_standard} {filterActivePrice.s3_infrequent}</p>
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


// {propR.resource.data.filter((e) => (e.id === propR.active))}