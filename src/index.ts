

(async () => {
	const bigArray = new Array(50000);

	console.time('Start');
	console.time('Five check');
	for (let i = 0; i < bigArray.length; i++) {
		console.log(new Date(), 'Doing something with this ***', i);

		somethingThatTakesTime(i);

		if (i % 5 === 0) {
			await timeout(1000);
			console.timeEnd('Five check');
			console.time('Five check');
		}
	}
	console.timeEnd('Start');
})();



export function timeout(ms: number) {
	return new Promise(res => setTimeout(res, ms));
}

function somethingThatTakesTime(index: number) {
	setTimeout(() => {
		console.log(new Date(), 'Completed', index);
	}, 2500);

}