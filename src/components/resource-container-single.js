import React, {Component} from 'react';

import RenderSingleInfo from './renderSingleInfo'

const container = {
	display:'flex',
	justifyContent:'space-between'
};

const width = {
	width:300
};

export default class SingleContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {res1:100, res2:10, res3:100, res4:100}
	}

	renderData() {
		const propR = this.props;
		console.log(propR)
		console.log()
		// const filterActiveName = 
		const filterActivePrice = (propR.resource.data.filter((e) => (e.id == propR.active)))[0];

		// .filter to active 
		return (
			<div style={container}>
				<RenderSingleInfo style = {width} value = {propR.resource.type}/>
				<input value={this.state[propR.id]} type="number" onChange={e => this.changeNumber(e.target.value, propR.id)}/>
				<RenderSingleInfo style = {width} value = {(this.state[propR.id] * filterActivePrice.s3_standard).toFixed(2)}/>
				<RenderSingleInfo style = {width} value = {(this.state[propR.id] * filterActivePrice.s3_infrequent).toFixed(2)}/>
			</div>
		)
	}

	changeNumber(value, id) {
		// console.log(value)
		// console.log(id)
		// console.log(this.state)
		let tempState = this.state
		tempState[id] = value
		this.setState(tempState)
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