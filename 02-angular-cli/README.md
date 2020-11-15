# @angular/cli

Advanced concepts in angular cli

## Lesson Plan

- creating a workspace
- creating application in the workspace
- creating a library
- tsconfig paths
- version control of library
- ivy renderer
- aot / jit
- reduce bundle size

## EX.

- create a library called `@exlibris/auth`
- In that library create an interceptor called `JWTInterceptor`
- That interceptor should grab from the `localStorage` the `token` key where the JWT token is stored 
- After getting the token, the interceptor should update the request headers and add the following header:

```
{
	Authorization: Bearer <token>
}
```
- In the library we created, also create an `@NgModule` that module should register the interceptor we created.
- Does the `@NgModule` need to include in the `imports` array the `HttpClientModule` ?
- create an application that will use the library you created.
- To use the library modify the `paths` in the `tsconfig.json` to map to the source file if using the import from `@exlibris/auth@dev`.
- create a simple app that sends a request to the server when you click a button: 
https://nztodo.herokuapp.com/api/tasks/?format=json
- place a random jwt token in the localStorage and verify that the request is sent with the proper Authorization header.

