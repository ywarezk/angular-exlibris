import { Subject, BehaviorSubject, ReplaySubject, interval } from 'rxjs';
import { multicast } from 'rxjs/operators';

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

const intervalSubj = new Subject();

const myObs$ = interval(1000).pipe(
	multicast(intervalSubj)
);


intervalSubj.asObservable();

/*

@Injectable({
	providedIn: 'root'
})
export class ShoulService {
	private data = new Subject()
	
	public data$ = this.data.asObservable()
}


*/
