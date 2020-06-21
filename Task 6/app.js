//            TASK : 06

//            CHAPTER # 21 - 25
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

//                  EX # 09

var n$1 = '472';
document.write(n$1 + '<br>');
document.write('String' + '<br>');
document.write(parseInt(n$1) + '<br>');
document.write('Number' + '<br>'  +'<br>');


//                  EX # 10

var userInput = prompt('enter a word : ');
document.write('User Input : ' + userInput + '<br>');
document.write('Upper Case : ' + userInput.toUpperCase() + '<br>' + '<br>');


//                  EX # 11                                                                                          


var a = prompt("enter");
var b =  a.slice(0,1).toUpperCase()+a.slice(1,10); 
document.write("User input: ",a,"<br>");
document.write("Upper case: ",b);


//                  EX # 12

var num = 35.36;
document.write('Number : ' + num + '<br>');
num = num.toString()
nmu = num.replace('.','')
document.write('Result : ' + nmu + '<br>' + '<br>');

//                  EX # 13

var sim = prompt('Enter your username : ');
if(sim === '@' || sim === '!' ||sim === '.' ||sim === ',' ){
    alert('Please! enter a valid username');}
var sim = prompt('Enter your username : ');


//                  EX # 14

var A = ['cake','apple pie','cookie','chips','patties'];
var cafu = prompt('Enter you wanna choose : ');
cafu = cafu.toLowerCase();
for(i=0;i<A.length;i++){
    if(A[i] === cafu){
        document.write(cafu + ' is available at index ' + A.indexOf(cafu) + ' in our bakery.' + '<br>' + '<br>');
    }
else{
        document.write('we are sorry ' + cafu + 'is not available in our bakery!');
        break
    }
}


//                  EX # 15                                          

var apo = prompt("enter your password");
document.write("entered password ", apo, "<br>");

if (apo.slice(0, 1) <= 1000000) {
    document.write("Password cannot start with the numbers ", "<br>");
    document.write("plz enter a valid password" + "<br>" + "<br>");
}
else if (apo.length <= 6) {
    document.write("Password length cannot be less tha 6 character ", "<br>");
    document.write("plz enter a valid password"+ "<br>" + "<br>");
}
for (var i=0; i < apo.length; i++){
    switch(apo){
        case "!" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "@" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "#" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "$" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "%" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "^" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "&" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "*" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "=" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "+" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;
    }
}

//                 EX # 16

var university = 'University of Karachi';
university = university.split("");
// console.log(university);
for (i=0 ; i < university.length ; i++){
    document.write(university[i] + '<br>');
}


//                  EX # 17

var en$ = prompt('enter input character : ');
document.write('User Input : ' + en$ + '<br>');
document.write('Last Character of Input : ' + en$.substr(-1) + '<br>' + '<br>');

//                  EX # 18

var senta = 'The quick brown fox jumps over the lazy dog .';
document.write(senta + '<br>');
senta1 = senta.toLowerCase();
c = (senta1.match(/the/g)).length;
document.write('There are ' + c + ' occurences of word \'the\' .' + '<br>'  + '<br>');



//              CHAPTER 26 - 30
//                  EX # 01

var no = +prompt('enter a +ve integar : ');
if( no > 0){
        document.write("Number : "+ no +"<br>");
        document.write("Round of value : "+ Math.round(no)  +"<br>");
        document.write("Floor value : "+ Math.floor(no) +"<br>");
        document.write("Ceil value : "+ Math.ceil(no) +"<br>" + "<br>");
}


//                  EX # 02

var noo = +prompt('enter a +ve integar : ');
if( noo < 0){
        document.write("Number : "+ noo +"<br>");
        document.write("Round of value : "+ Math.round(noo)  +"<br>");
        document.write("Floor value : "+ Math.floor(noo) +"<br>");
        document.write("Ceil value : "+ Math.ceil(noo) +"<br>" + "<br>");
}


//                  EX # 03

var twerw = +prompt('enter a number : ');
document.write('The absolute value of ' + twerw + ' is ' + Math.abs(twerw) + '<br>' + '<br>' );


//                  EX # 04

t = Math.random() *6 ;
document.write("The random value of dice is : " + Math.ceil(t) + '<br>' + '<br>');

//                  EX # 05

t$t = Math.random() * 2 ;
t$tf = Math.floor(t$t)
document.write(t$tf + '<br>');
if(t$tf == '2'){
    document.write('random coin value :  HEADS' + '<br>' + '<br>'  );}
else if(t$tf == '1'){
    document.write('random coin value :  TAILS' + '<br>' + '<br>'  );}

    

//                  EX # 06

var lahm = Math.random()*100;
document.write("Random number between 1 and 100 : " + Math.ceil(lahm) + '<br>' + '<br>');


//                  EX # 07

var a = prompt('enter weight : '); 
if (a.substr(3) == "" || a.substr(3) == "kg" || a.substr(2) == "kg" || a.substr(5) == "kgs" || a.substr(4) == "kgs" || a.substr(5) == "kilograms" || a.substr(4) == "kilograms"){
    document.write("The weight of user is : " + a + '<br>');
}


//                  EX # 08

var g1 = Math.random() * 10;
g1 = Math.floor(g1);
var g2 = +prompt('enter your guess between 1 to 10 : ');

if ( g2 === g1){
    alert('Congratulations , Right Guess!');
}
else{
    alert('Hard Luck try Next time !');
}



//          CHAPTER 31 - 34
//                  EX # 01

var dAt = new Date();
document.write(dAt + '<br>' + '<br>');


//                  EX # 02

var d = new Date();
var Mat = d.getMonth();
document.write('Current Month : '+Mat + '<br>' + '<br>');


//                  EX # 03

var d = new Date();
var Day = d.toString();
Day1 = Day.slice(0,3) ;
document.write('Today is '+ Day1+ '<br>' + '<br>');
 

//                  EX # 04

var d = new Date();
var Day = d.toString();
Day1 = Day.slice(0,3);

if ( Day1 === 'Saturday' || Day1 === 'Sunday'){
    document.write('It\'s Funday!'+ '<br>' + '<br>');
    
}

//                  EX # 05

var d = new Date();
var dayOfMonth = d.getDate();
// document.write(d)

if ( dayOfMonth < 16){
        document.write('First Fifteen Days of month'+ '<br>' + '<br>');    
}
else{
        document.write('Last days of month'+ '<br>' + '<br>');
}


//                  EX # 06

var d = new Date();
document.write('Current Date : '+ d + '<br>');
var millsSince = d.getTime();
document.write('elapsed millisecods since January 1 , 1970  : '+ millsSince + '<br>');
var min = millsSince / 1000 * 60 ;
document.write('elapsed minutes since January 1 , 1970  : '+ millsSince + '<br>' + '<br>');


//                  EX # 07

var d = new Date();
var currentHrs = d.getHours();
if ( currentHrs > 12 ){
    document.write('It\'s AM' + '<br>' + '<br>');
}
else{
    document.write('It\'s AM' + '<br>' + '<br>');
}


//                  EX # 08

var w = new Date("Dec 31,2020");
var o = w.getTime();
document.write("Last Date : " + o + '<br>' + '<br>');


//                  EX # 09

var a$$ = new Date("Jun 18,2015");
var b$$ = a$$.getTime();
var c$$ = new Date();
var d$$ = c$$.getTime();
var e$$ = d$$ - b$$;
var f$$ = Math.floor(e$$/(1000*60*60*24));
document.write(f$$ + " days have passed away since1st Ramadan , 2015" + "<br>" + "<br>");


//                  EX # 10

var a$$$ = new Date(prompt("enter the refrence date : "));
var b$$$ = a$$$.getTime();
var c$$$ = new Date("Jan 1,2015");
var d$$$ = c$$$.getTime();
var e$$$ = b$$$ - d$$$ ;
var f$$$ = Math.floor(e$$$/(1000*60));
document.write("On refrence Date " + a$$$ +" now " + f$$$ + " seconds had passed since begining of 2015 " + "<br>" + "<br>");