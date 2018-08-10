import React, {Component} from 'react';

import RenderSingleInfo from './renderSingleInfo'


const container = {
	display:'flex',
	justifyContent:'space-between'
};

const style = {
	width:300,
	textAlign:'center'
};

const styleInput = {
	width:300,
	textAlign:'center'
}

export default class SingleContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {res1:100, res2:10, res3:100, res4:100}
	}

	// renderInfo() {
	// 	if (this.props.header === "true") this.renderHeader();

	// 	else {
	// 		this.renderData()

	// 	}
	// }


	renderData() {
		const propR = this.props;
		const filterActivePrice = (propR.resource.data.filter((e) => (e.id === propR.active)))[0];
		// console.log(filterActivePrice)
		// .filter to active 
		return (
			<div style={container} className="card-body">
				<RenderSingleInfo style = { style } value = {propR.resource.type}/>
				<input style = { styleInput } value={this.state[propR.id]} type="number" onChange={e => this.changeNumber(e.target.value, propR.id)}/>
				<RenderSingleInfo style = { style } value = {(this.state[propR.id] * filterActivePrice.s3_standard).toFixed(2)}/>
				<RenderSingleInfo style = { style } value = {(this.state[propR.id] * filterActivePrice.s3_infrequent).toFixed(2)}/>
			</div>
		)
	}

	// renderHeader() {
	// 	return (
	// 		this.props.d.map((ele) => {
	// 			return(
	// 				<RenderSingleInfo value = {ele.header} />
	// 			)
	// 		})
	// 	)
	// }

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
			  <div >
				{ this.renderData() }
			  </div>
		)
	}
}


// {propR.resource.data.filter((e) => (e.id === propR.active))}