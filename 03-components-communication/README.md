# Component Communication

In this lesson we will show examples of communication between components.  
This will allow us to create a more generic and reusable components.  

## Lesson Plan

- Input
- OnChanges
- OnInit
- Output
- Template Reference Variable
- ViewChild
- ng-content - Content Projection
- ContentChild
- passing template pattern
- structural directive

## EX.

```
<div *withUserRole="'admin'; else notAdmin; let user">
	<h1>Hello Admin {{user.name}}</h1>
</div>
<ng-template #notAdmin>
	<h1>
		You are not authorized
	</h1>
</ng-template>

@Injectable()
export class UserService {
	user$ = new BehaviourSubject({
		name: 'Yariv',
		role: 'admin'
	})
}
```


## EX.

- Create the following pyramid of components
    - App
    - Child1
    - Child2
    - GrandChild1
    - GrandChild2
- You will have to communicate between all these components by passing messages from one to the other and displaying those message.
- GrandChild2 will send a message to GrandChild1 via a Service, the message will be sent via a form with a text input
- Child2 will transfer an @Input to GrandChild2 that will display a message on GrandChild2
- Use the same form in GrandChild2 and place another button that will send the text to @Output and to the parent
- Child2 will grab the instance of GrandChild2 and will call a function that returns a string in the AfterViewInit and will print that string in his template.
- App will transfer ng-content to Child1

## EX

In this ex you will create a completely configurable Login component
The login component is made from these configurable items:
- labels
- input for email
- input for password
- submit button
Each item can change the appearance based on content projection.

```
<app-login>

	<app-login-label>
		<ng-template let-title>
			<label>
			<h1>
				<u>
				{{title}}
				</u>
			</h1>
			</label>
		</ng-template>
	</app-login-label>

	<app-login-input>
		<ng-template let-fc>
			<input
			[formControl]="fc"
			type="text"
			placeholder="Enter your email"
			/>
		</ng-template>
	</app-login-input>>

	<app-login-input>
	<ng-template let-fc>
		<input
		[formControl]="fc"
		matInput
		placeholder="Ex. Pizza"
		value="Sushi">
	</ng-template>
	</app-login-input>
	
	<app-login-submit>
		<ng-template>
			<button type="submit">Submit</button>
		</ng-template>
	</app-login-input>

</app-login>
```

- The directive **app-login-label** will get a template configuring how the labels will look like. Notice that it will get a variable to the text of the label.
- The directive **app-login-input** will define how the inputs look like, they will get the formControl to attach
- The directive **app-login-submit** will define how the submit button looks like
- The login component should print to the console the email and password when the form is submitted



