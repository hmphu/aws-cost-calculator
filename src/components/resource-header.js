import React from 'react';
import RenderSingleInfo from './renderSingleInfo';

const style = {
	textAlign:'center',
	width:300
}

export default function ShowResourceHeader(props) {
	return(
		props.heads.map((ele) => {
			return(
				<RenderSingleInfo style = {style} key = {ele.header} value = {ele.header} />
			)
		})
	)
}