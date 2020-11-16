/**

// 1. creating operators
function createSomeObservable(args) {
	return new Observable(...)
}

// 2. manipulating

function map(cb: (arg: any) => any) {
	return (oldObservable) => {
		
		return new Observable((observer) => {
			oldObservable.subscribe((num: number) => {

			})
		})
		
		//return new Observable(...)
	}
}

 */
 
import { interval, Observable, Subject, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const counter$: Observable<number>  = interval(1000);

const hello$: Observable<string> = counter$.pipe(
	tap((msg: number) => {
		console.log(msg);
	}),
	map((num: number) => {
		return `hello world ${num}`;
	}),
	tap((msg: string) => {
		console.log(msg);
	})
)

of(10).subscribe((num10) => {
	console.log(num10);
})

