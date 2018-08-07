import React from 'react';

const divContainer = {
	display:'flex',
	alignItems:'center',
	padding:5,
	flexDirection:'column'
}

const margin = {
	margin:10
}

export default function titleHeader() {
	return(
		<div style={divContainer}>
			<h1 style={margin}>AWS S3 Standard vs S3 Infrequent Access</h1>
			<h6 style={margin}>Cost Calculator (All units per month)</h6>
		</div>
	);
}