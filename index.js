const hello = require('./hello');
const helloJS = require('./hello/hello-js');
const helloTS = require('./hello/hello-ts');
const env = require('./lib/env');
console.log({ hello, helloJS, helloTS });
hello();
helloJS();
helloTS();
console.log(env());
