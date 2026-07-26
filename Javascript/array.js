function arrays(m,n) {

	const newArray = [];
	for (i=0; i<m; i++) {
		const row=[];
		for (j=0; j<n; j++) {
			row.push(0);

		}
		newArray.push(row);
	}
	return newArray;
}

console.log(arrays(3,3));
