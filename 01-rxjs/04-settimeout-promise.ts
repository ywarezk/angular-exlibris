

/**
 Promise can be in one of the following states:
 - Pending
 - Pending -> Resolved/Rejected
 */

const timeout$: Promise<string> = new Promise((resolve, reject) => {
	console.log('how many times does this function run?');
	setTimeout(() => {
		// resolve('hello from promise');
		reject(new Error('something happened in our async code'));
	}, 1000);
});

timeout$.then(
	(msg: string) => {
		console.log(msg);
	},
	(err) => {
		console.log(err.message);
	}
)

timeout$.then((msg: string) => {
	// console.log(msg);
	// ...
})

timeout$.then((msg: string) => {
	// console.log(msg);
	// ...
})

// promise is not cancelable