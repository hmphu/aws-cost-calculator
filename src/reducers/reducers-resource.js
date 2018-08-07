export default function () {
	let main = [
		{id: 'res1', type:'Data Size in TB'},
		{id: 'res2', type:'No. of POST/PUT requests in Millions'},
		{id: 'res3', type:'No. of GET requests in Millions'},
		{id: 'res4', type:'S3 IA Data transfer cost in GB'}
	];

	let source = [
		{id: 'us-east-1', s3_standard:[30,5,0.4,0], s3_infrequent:[12.5,10,1,0.01]},
		{id: 'us-west-2', s3_standard:[30,5,0.4,0], s3_infrequent:[12.5,10,1,0.01]},
		{id: 'us-west-1', s3_standard:[33,5.5,0.44,0], s3_infrequent:[19,10,1,0.01]},
		{id: 'eu-west-1', s3_standard:[30,5,0.4,0], s3_infrequent:[12.5,10,1,0.01]},
		{id: 'eu-central-1', s3_standard:[32.4,5.4,0.43,0], s3_infrequent:[18,10,1,0.01]},
		{id: 'ap-southeast-1', s3_standard:[30,5,0.4,0], s3_infrequent:[20,10,1,0.01]},
		{id: 'ap-southeast-2', s3_standard:[33,5,0.44,0], s3_infrequent:[19,10,1,0.01]},
		{id: 'ap-northeast-1', s3_standard:[33,4.7,0.37,0], s3_infrequent:[19,10,1,0.01]},
		{id: 'ap-northeast-2', s3_standard:[31.4,4.5,0.35,0], s3_infrequent:[18,10,1,0.01]},
		{id: 'ap-south-1', s3_standard:[30,5,0.4,0], s3_infrequent:[19,10,1,0.01]},
		{id: 'sa-east-1', s3_standard:[40.8,7,0.56,0], s3_infrequent:[26,10,1,0.01]},
	];

	return compile(main, source);
}

function compile(main, source) {
	let newArray = [];

	for(let i=0; i<main.length;i++) {
		let tempArray = [];
		for(let j=0; j<source.length; j++) {
			let id = source[j].id;
			let s3s = source[j].s3_standard[i];
			let s3i = source[j].s3_infrequent[i];

			let temp = {id:id, s3_standard:s3s, s3_infrequent:s3i};
			tempArray.push(temp);
		}
		let newData = Object.assign({data:tempArray}, main[i]);
		newArray.push(newData);
	}

	return newArray;
}



// 	[
// 		{id: 'us-east-1', s3_standard:30, s3_infrequent:12.5},
// 		{id: 'us-west-2', s3_standard:30, s3_infrequent:12.5},
// 		{id: 'us-west-1', s3_standard:33, s3_infrequent:19},
// 		{id: 'eu-west-1', s3_standard:30, s3_infrequent:12.5},
// 		{id: 'eu-central-1', s3_standard:32.4, s3_infrequent:18},
// 		{id: 'ap-southeast-1', s3_standard:30, s3_infrequent:20},
// 		{id: 'ap-southeast-2', s3_standard:33, s3_infrequent:19},
// 		{id: 'ap-northeast-1', s3_standard:33, s3_infrequent:19},
// 		{id: 'ap-northeast-2', s3_standard:31.4, s3_infrequent:18},
// 		{id: 'ap-south-1', s3_standard:30, s3_infrequent:19},
// 		{id: 'sa-east-1', s3_standard:40.8, s3_infrequent:26},
// 	]

