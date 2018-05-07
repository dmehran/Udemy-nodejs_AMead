console.log('Starting app.js');

// Fetch the fs module (File System) from nodejs.api
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();
// console.log(user);

/**
 *  Asynchronous function) option 1 for versions later than nodejs ver 6.x
 *  Use of template string: `${JavaScript_variable}`
 **/
var welcome_message = `\nHello ${user.username}! You are ${notes.age}.`;

fs.appendFile('greetings.txt', welcome_message, function(err){

  if(err){
    console.log('Unable to write to file');
  }
});
