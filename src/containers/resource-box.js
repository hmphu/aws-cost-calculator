import React, {Component} from 'react';
import {connect} from 'react-redux';
import SingleContainer from '../components/resource-container-single'

const cardContainer = {
	display:'flex',
	paddingTop:30,
	flexDirection:'row',
	justifyContent:'center'
}

const card = {
	flex:0.8,
}

class ResourceBox extends Component {
	renderSingle() {
		return (
			this.props.resource.map((e) => {
					return (
						<SingleContainer key={e.id} id={e.id} resource={e} active = {this.props.active}/>
					)
				})
		)
	}

	render() {
		return(
			<div style={cardContainer}>
				<div className="card" style={card}>
				  <div className="card-header">
				    Header
				  </div>
				  {this.renderSingle()}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		resource:state.resource,
		active: state.active
	}
}

export default connect(mapStateToProps)(ResourceBox);