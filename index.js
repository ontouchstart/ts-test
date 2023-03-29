const hello = require('./hello');
const helloJS = require('./hello/hello-js');
const helloTS = require('./hello/hello-ts');
console.log({ hello, helloJS, helloTS });
hello();
helloJS();
helloTS();
