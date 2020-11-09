
const counterPromise$: Promise<number> = new Promise((resolve, reject) => {
	resolve(1);
	resolve(2);
	resolve(3);
});

counterPromise$.then((num: number) => {
	console.log(num);
})