# Change Detection

## What is Change Detection

- angular suspects something happened
- angular recalculates template dynamic values `{{}}` `[]`


## What will trigger angular to activate change detection?

- Events
- ajax
- promise / observable
- timers

async stuff that happens in angular world

## Automatic Change Detection

angular knows without you telling that something async happened

- automatic is comfortable
- automatic is not performent 

## how does angular know to trigger change detection

## Does cd in app component trigger cd in children?

yes

async stuff in a single component no matter where that component.  
angular will trigger cd in ALL COMPONENTS.  
TOP -> BOTTOM

## Component Tree

        AppComponent (CD)
        
                    ChildComponent (CD)
                    
                            GrandComponent (CD)
                            
## ChangeDetectorRef

clean / dirty

in automatic change detection ChangeDetectorRef is set to dirty on every async action

## OnPush - what triggers cd

- Events - from parent until event source
- @Input - change
- ChangeDetectorRef - manually stating that you are dirty
- **async pipe**





