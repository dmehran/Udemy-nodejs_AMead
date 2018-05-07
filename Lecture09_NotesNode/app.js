console.log('Starting app.');

// Fetch the fs module (File System) from nodejs.api
const fs = require('fs');
const os = require('os');

var user = os.userInfo();
console.log(user);

// Option on or before nodejs version 6.x
// fs.appendFile('greetings.txt', 'Hello World!');


/**
 *  Asynchronous function) option 1 for versions later than nodejs ver 6.x
 *  Use of template string: `${JavaScript_variable}`
 **/
var welcome_message = `Hello ${user.username}!`;

fs.appendFile('greetings.txt', welcome_message, function(err){

  if(err){
    console.log('Unable to write to file');
  }
});


// (Synchronous function) option 2 for versions later than nodejs ver 6.x
// fs.appendFileSunc('greetings.txt', 'Hello World!');
