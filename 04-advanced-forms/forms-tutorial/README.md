# Advanced forms

## How angular wants us to look at forms

- FormControl
- FormArray
- FormGroup

- Login Form
  - FormGroup
    - FormControl - email
    - FormControl - password
    
```
{
  email: '...',
  password: '...'
}
```
    
- Register Form
  - FormGroup
    - FormControl - email
    - FormGroup - Password & Repeat + Validation
      - FormControl - password
      - FormControl - repeat password
      
```
{
  email: 'yariv@nerdeez.com',
  passwordRepeat: {
    password: '12345678',
    repeat: '12345678'
  }
}
```
      
- Phone Form
  - FormGroup
    - FormArray
      - FormGroup
        - FormControl - Prefix
        - FormControl - phone number
        
```
{
  phoneNumbers: [
    { prefix: '052', phoneNumber: '1234567' },
    { prefix: '052', phoneNumber: '1234562' },
    { prefix: '052', phoneNumber: '1234561' }
  ]
}
```
