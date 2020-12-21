# Injector trees

- element tree
- module tree


## Elements tree

for every element in the template that specify providers array. 
They will have an injector.
directives can share a single injector if they are on the same element.


## Module tree

root injector

every lazy loaded module that has providers or imports will add an injector

## Algo DI
