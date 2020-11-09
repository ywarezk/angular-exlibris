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
 
import { interval, Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const counter$: Observable<number>  = interval(1000);

const hello$: Observable<string> = counter$.pipe(
	map((num: number) => {
		return `hello world ${num}`;
	}),
	tap((msg: string) => {
		console.log(msg);
	})
)

