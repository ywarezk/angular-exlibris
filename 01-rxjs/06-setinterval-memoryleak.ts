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

const interval$: Observable<string> = new Observable((observer) => {
	const intervalId = setInterval(() => {
		console.log('set interval is running?');
		observer.next('hello');
	}, 1000);
	
	// tearDown function
	return () => {
		clearInterval(intervalId);	
	}
});

const sub: Subscription = interval$.subscribe((msg: string) => {
	console.log(msg);
});

setTimeout(() => {
	sub.unsubscribe();
}, 3000)