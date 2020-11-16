import { from, Observable, interval } from 'rxjs';
import { take } from 'rxjs/operators';

const stamPromise: Promise<string> = Promise.resolve('hello world');

const obsHello$: Observable<string> = from(stamPromise);

/**

Promise
------------+-|

Observable
----+----+----+---|
 */
 
const counter$ = interval(1000);

// Promise stuck in pending
counter$.toPromise() // means nothing

counter$.pipe(
	take(5)
).toPromise();

