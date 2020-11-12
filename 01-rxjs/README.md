# RXJS

Our goal in this lesson is to improve your asynchronous coding skills.  

## Lesson Plan

- What is async code
- With async code data is pushed
- classifying your async code
- Reviewing ways of dealing with async code
- RXJS - Pushed data using Observable pattern
- Going over differences between Promise and Observable
- How many times the data source function is running
- Observable is lazy
- Observable is duplicated for every listener
- Lookout! memory leaks!
- Closing Observable
- Subscription
- Subject
- Operators
- Error Handling

## Promise VS Observable

Promise can resolve once  
Observable can resolve many times  

## Promise VS Observable

promise is always async  
observable sometime async but if possible will run immediatly.  


## EcmaScript Observable

- stage 1 ready to move to stage2

- stage2 typescript experimental 


## Student EX.

### Throttling 

Throttling is the process of prioritize action A on action B.
In this ex we will prioritize the user typing in search field over http request.

- Using @angular/cli create a new angular project
- in **AppComponent** you should place a text input for searching along with an unordered list **ul** displaying items from a server.
- Our server is located at the following URL: 
https://nztodo.herokuapp.com/api/tasks/?format=json&search=`<search string>`
- it will accept a search string and display a filtered list according to the search param.
- when the user types search text our app should send a request to the server and display the list that the server returns.
- We want to send one request when the user stopped typing and not many requests with each character.
- To achieve this we will create a **Directive** that is attached to a text input.
- That directive should expose an event called **throttling** which will send a $event of type string of the string the user typed.
- The throttling event will not be invoked every character but rather after the suer stopped typing text (1 sec passed without additional characters typed).
- In the directive you can get the input by requesting **ElementRef** 
- you can use the **fromEvent** operator to create an observable from the input event of the text input
- you can use the **debounceTime** operator to activate an **EventEmitter** after the user finished typing.


### Popular operators

- Create a playground where you can experiment with these popular operators.
- For creating the playground do the following:
  - Create a new folder **operators-playground**
  - In that folder init npm
  ```
  > npm init --yes
  ```
  - Install typescript
  ```
  > npm install typescript -D
  ```
  - Install ts-node and rxjs
  ```
  > npm install ts-node rxjs
  ```
  - create a default **tsconfig.json**
  ```
  > npx tsc --init
  ```
  - Create a file **hello.ts**
  - To run this file:
  ```
  > npx ts-node hello.ts
  ```
After creating the playground your job is to use the following operators.
It might be easier to use some operators by creating subjects.
This is the list of popular operators you should familiarize yourself with:
- map
- filter
- debounceTime
- mergeMap
- interval
- of
- tap
- catchError
- withLatestFrom
- merge

### Find the memory leak

- In the folder **memory-leak** there is a simple angular application.
- That application has routing with different screens.
- In that app there is a memory leak
- You job is to fix the memory leak.
- Use developer tools and the memory tab to take a heap snapshot and heap recording
- this will help you find the memory leak.
- Use that information to find and fix the memory leaks.


