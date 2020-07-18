

(async () => {
	// Rate limiting
	const bigArray = new Array(50000);

	console.time('Total');
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
	console.timeEnd('Total');

	// Time test
	// console.time('TimeTest');
	// await consoleTimeTest();
	// console.timeEnd('TimeTest');
})();


async function consoleTimeTest() {
	const smallArray = new Array(100);

	for (let item of smallArray) {
		await timeout(500);
	}
}

export function timeout(ms: number) {
	return new Promise(res => setTimeout(res, ms));
}

function somethingThatTakesTime(index: number) {
	setTimeout(() => {
		console.log(new Date(), 'Completed', index);
	}, Math.floor(Math.random() * 2500));
}

