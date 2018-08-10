import React, {Component} from 'react';
import {connect} from 'react-redux';
import SingleContainer from '../components/resource-container-single'
import ShowResourceHeader from '../components/resource-header'

const cardContainer = {
	display:'flex',
	paddingTop:30,
	flexDirection:'row',
	justifyContent:'center'
}

const cardHeader = {
	backgroundColor: '#337ab7',
	display:'flex',
	justifyContent:'space-around',
}

const card = {
	flex:0.8,
}



class ResourceBox extends Component {
	renderSingle() {
		return (
			this.props.resource.map((e) => {
				console.log(e)
					return (
						<SingleContainer key={e.id} id={e.id} resource={e} active = {this.props.active} />
					)
				})
		)
	}

	// renderSingleHeader() {
	// 	console.log(this.props.title)
	// 	return(
	// 		<SingleContainer header="true" d={this.props.title}/>
	// 	);
	// }

	render() {
		return(
			<div style={cardContainer}>
				<div className="card" style={card}>
					<div style={cardHeader} className = "card-header">
				  		<ShowResourceHeader heads = {this.props.title}/>
				  	</div>
				  <div className="card-body">
				  	{this.renderSingle()}
				  </div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		resource:state.resource,
		active: state.active,
		title: state.headerTitle
	}
}

export default connect(mapStateToProps)(ResourceBox);