import 'zone.js';

console.log('zone.js tutorial!');

console.log(Zone.current.name);

const angularRoom = Zone.current.fork({
  name: 'angular',
  onHasTask: () => {
    console.log('trigger cd');
  }
});

console.log(angularRoom.name);

angularRoom.run(() => {

  // run code from inside the angular room
  setTimeout(() => {
    console.log('timer is running');
  }, 1000)

})

// const oldSetTimeout = window.setTimeout;

/*
 window.setTimeout = (cb) =>  {
   // trigger onHashTask
   oldSettimeout(() => {
     // trigger onHasTask
     cb()
   })
 }
*/
