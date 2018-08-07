import React, {Component} from 'react';
import {connect} from 'react-redux';
import {activeItem} from '../actions/active-item';
import {bindActionCreators} from 'redux';

const selectContainer = {
	display:'flex',
	justifyContent:'center',
}


class LocationDropdown extends Component {
	constructor(props) {
		super();
		this.setState = "";
	}

	renderOptions() {
		return(
			this.props.dropdownList.map((data) => {
				return(
					<option key={data.id} value={data.id}>{data.location} - {data.id}</option>
				);
			})
		);
	}


	render() {
		return(
			<div style={selectContainer} >
				<select selectname="" id="" onChange={(e) => this.props.activeItem(e.nativeEvent.target.value)} >
					{this.renderOptions()}
				</select>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		dropdownList: state.dropdown
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({activeItem:activeItem},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationDropdown);