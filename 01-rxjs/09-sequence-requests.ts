/**
 * Regarding to Shay question:
 * I have multiple request and each one should "wait" for the previous one to finish
 * Example in RXJS:
 */
 
import { map, mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';
import axios from 'axios';

// concat is deprecated use concatAll
// import { concatAll } from 'rxjs/operators';

/**
 * consider this similar to calling angular's HttpClient.get
 * this is a custom operator that creates an observable from an ajax call
 * @param url url to fetch from
 */
function ngHttpClientGet(url: string) {
	return from(axios.get(url)).pipe(
		map((res) => res.data)
	)
}

// this operator creates an observable from ajax request
// in this example consider this similar HttpClient.get
ngHttpClientGet('https://nztodo.herokuapp.com/api/tasks/?format=json').pipe(
	// you can chain mergeMap
	// each mergeMap will get the previous response
	// and can issue a new request
	mergeMap((resData) => ngHttpClientGet(`https://nztodo.herokuapp.com/api/task/${resData[0]['id']}?format=json`)),
	mergeMap((resData) => {
		// using the previous response data
		console.log(resData.title);
		
		// and using it to send another request
		return ngHttpClientGet(`https://nztodo.herokuapp.com/api/task/${resData['id']}?format=json`)
	})
).subscribe((data) => {
	// the result from the last request
	console.log(data);
})

