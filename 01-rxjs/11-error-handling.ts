/**

How to handle error proparly in our async code

 */
 
/*

@Injectable()
export class StamService {
	
	
	// sync function	
	hello(arr: string[]) {
		
		try {
			// ... dangerous1
		} catch(err) {
			// some logic
			throw new Error()
		}
		
		// ...dangerous2
		
	}
	
}

*/

import { catchError, map, mergeMap } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';
import axios from 'axios';

/**
 * consider this similar to calling angular's HttpClient.get
 * this is a custom operator that creates an observable from an ajax call
 * @param url url to fetch from
 */
function ngHttpClientGet(url: string): Observable<any> {
	return from(axios.get(url)).pipe(
		map((res) => res.data)
	)
}

declare var stamService: StamService;

export class StamService {
	/**
	 * @returns: {Observable<data>}
	 */
	fetch() {
		return ngHttpClientGet('https://nztodo.herokuapp.com/api/tasks/?format=json').pipe(
			catchError((err) => {
				return of([])
			}),
			mergeMap(() => ngHttpClientGet('https://nztodo.herokuapp.com/api/tasks/?format=json')),
			mergeMap(() => ngHttpClientGet('https://nztodo.herokuapp.com/api/tasks/?format=json')),
			catchError((err) => {
				// throw new Error('');
				return of([]);
			}),
			mergeMap(() => ngHttpClientGet('https://nztodo.herokuapp.com/api/tasks/?format=json')),
			mergeMap(() => ngHttpClientGet('https://nztodo.herokuapp.com/api/tasks/?format=json')),
		);	
	}
}

stamService.fetch().subscribe(
	() => {},
	(err) => {} 
)