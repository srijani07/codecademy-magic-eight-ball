var readlineSync = require('readline-sync');

var userName = readlineSync.question('Welcome to the future. May I have your name? ');
userName ? console.log('Hello, '+userName) : console.log('Hello!');
var userQuestion = readlineSync.question('What is your question? ');

var userToken = Math.floor(Math.random()*8);

switch(userToken) {
    case 1 : console.log('It is certain');
             break;
    case 2 : console.log('It is decidedly so. ');
             break;
    case 3 : console.log('Reply hazy, try again.');
             break;
    case 4 : console.log('Cannot predict now.');
             break;
    case 5 : console.log('Do not count on it.');
             break;  
    case 6 : console.log('My sources say no. ');
             break;
    case 7 : console.log('Outlook not so good. ');
             break;  
    case 8 : console.log('Signs point to yes.');
            break;
    default : console.log("YOUR QUESTION BROKE MY PREDICTION SYSTEM!!!! ");


}