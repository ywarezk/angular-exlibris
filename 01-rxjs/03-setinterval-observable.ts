/**
 * Observable 1..2..3
 * 1..2..3
 * setInteraval
 */
 
import { Observable } from 'rxjs';

/**
 import {HttpClient} from '@angular/common/http';
 
 const obs$ = this._http.get('....');
 
 obs$.subscribe()
 obs$.subscribe()
 obs$.subscribe()
 */

const interval$: Observable<number> = new Observable((observer) => {
	console.log('how many times does this function run?');
	let counter: number = 0;
	setInterval(() => {
		//0
		observer.next(counter);
		
		//1
		// observer.next(counter);
		// console.log('1')
		counter++;
	}, 1000);
});

/*
interval$.subscribe((num: number) => {
	// console.log(num);
});

interval$.subscribe((num: number) => {
	//console.log(num);
})

interval$.subscribe((num: number) => {
	//console.log(num);
})
*/