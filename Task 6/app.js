//            TASK : 06

//            CHAPTER # 21 - 25 ( STRING METHODS )
//                   EX # 01

var firstName = prompt('Enter your first name: ');
var lastName = prompt('Enter our last name: ');
var fullName = firstName + ' ' + lastName;
alert('Welcome To This Webpage Dear ' + fullName);

//                   EX # 02

var favoritePhone = prompt('enter your favourite phone model : ');
document.write('My favourite phone model is : ' + favoritePhone + '<br>');
document.write('Length of String is : '  + (favoritePhone.length) +  '<br>' + '<br>');

//                   EX # 03

var stp = 'Pakistan';
document.write('String : ' + stp + '<br>');
document.write("Index of 'n' : " + stp.indexOf('n') + '<br>' + '<br>');

//                   EX # 04

var stpp = 'Hello World';
document.write('String : ' + stpp + '<br>');
document.write("Last Index of 'l' : " + stpp.lastIndexOf('l') + '<br>' + '<br>');


//                   EX # 05

var stppp = 'Pakistani';
document.write('String : ' + stppp + '<br>');
document.write('Character at Index 3 is : ' + stppp.charAt(3) + '<br>' + '<br>');


//                   EX # 06

var firstName$ = prompt('Enter your first name : ');
var lastName$ = prompt('Enter our last name : ');
var fullName$ = firstName$.concat(lastName$);
alert('Welcome To This Webpage Dear ' + fullName$);


//                   EX # 07

var cityh = 'Hyderabad';
document.write('City : '+cityh + '<br>');
cityi = cityh.replace("Hyder","Islam");
document.write('After Replacement : '+cityi + '<br>' + '<br>');


//                  EX # 08

var message = 'Ali and Sami are best friends. They play cricket and football together.';
message = message.replace(/and/g,"&");
document.write(message + '<br>' + '<br>');

