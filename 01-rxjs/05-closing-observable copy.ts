/**
 * is my data stream finite
 */
 
import { Observable, Subscription } from 'rxjs';

/**
 this.sub = someObs$.subscribe(() => {
	 
 })
 
 someObs$ | async
 
 ngOnDestroy() {
	 this.sub.unsubscribe()
 }
 */

const hello$: Observable<string> = new Observable((observer) => {
	setTimeout(() => {
		// observer.error(new Error('something happend'))
		// observer.next('hello');
		// observer.complete();
	}, 1000)
});

const sub: Subscription = hello$.subscribe((msg: string) => {
	console.log(msg);
})