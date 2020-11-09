import { Observable } from 'rxjs';

const counter$: Observable<number> = new Observable((observer) => {
	observer.next(1);
	observer.next(2);
	observer.next(3);
});

counter$.subscribe((num: number) => {
	console.log('print 1:');
	console.log(num);
});
console.log('print 2');