import React from 'react';



export default function renderSingleInfo(props) {
	console.log("AAA");
	return (
		<span style={props.style}>{props.value}</span>
	);
}