import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

const counter$: Subject<number> = new Subject();

counter$.next(1);
counter$.next(2);
counter$.next(3);

counter$.subscribe((num: number) => {
	
});

counter$.next(4);

counter$.subscribe((num: number) => {

});

counter$.next(5);

counter$.asObservable()

const counter2$ : BehaviorSubject<number> = new BehaviorSubject(0);

counter2$.next(1);
counter2$.next(2);
counter2$.next(3);

counter2$.subscribe((num: number) => {
	
})