# Advanced Forms

In this lesson we will cover advanced usage of @angular/forms

## Lesson Plan

- How to look at forms
- Digging dipper on NgModel, NgForm
- Validation and custom validation
- ControlValueAccessor
- Dynamic forms

## EX.

Create a custom form control

```
<input type="phone" />
```

it will accept only numbers and add a dash between the prefix and the number

## EX.

Create a custom form control

```
<input type="creditCard" />
```

it will accept only number and add a dash every 4 numbers and only allow 16 numbers.

## EX. HARD

Create a custom form control

```
<input type="cities" />
```

it will add an autocomplete list that is taken from the server:  
```
https://nztodo.herokuapp.com/api/tasks/?format=json&search=<what the user typed>
```

The user will have to choose from that list an item and the control will return an entire object of that item.

## EX.

Create a custom form control made from an entire component.  
That component the user can enter his address and consists of an input to place the city and an input to place the address.  
The component will return an address object.

## EX. Custom Validation

- Create a custom validation for id number
- Create a custom validation for phone number
- you can attach the phone validation to the component you created in the first EX.