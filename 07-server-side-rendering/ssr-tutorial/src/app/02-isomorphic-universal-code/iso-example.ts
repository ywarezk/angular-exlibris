
// isomorphic
console.log('hello world');

// works only on browser
// not isomorphic
//document.getElementById('foo');

// turning non iso to iso
if (typeof document !== 'undefined') {
  console.log('im on the browser')
  document.getElementById('foo');
} else {
  console.log('im on node i dont have document');
}

// shim
// polyfill
if (typeof window === 'undefined' ) {
  (<any>global).window = {document: { getElementById: () => null } as any};
}

// universal code is a bit harder to write
