//Function Declaration
//helloWorldDec();
//function helloWorldDec() {
//alert('Hello World!');
//}


//Function Expression
//var helloWorldExp = function(){
  //alert('Hello World Again');
//};
//helloWorldExp();
//Hoisting - Brings Var names and function dec to the top
/*
function ges(first,last){
  alert('Good Evening ' + first + ' ' + last);
}
ges('Benjamin','Jones');

function num(exp1, exp2){
  alert(2017 + 4 - exp1 + exp2);
}
num(2,4);

function color1(col1, col2, col3){
  console.log(col1,col2,col3);
}
color1('Black','Blue','Red');

var gms = function(first2, last2){alert('Good Morning ' + first2 + ' ' + last2)}('Benjamin','Jones');
var num2 = function(num3,num4){alert(num3+num4)}(28,4);
var color2 = function(col4,col5,col6){console.log(col4,col5,col6)}('Red','White','Blue');

//Parameters and Arguments
//Parameters are a variable that is used in the Function Declaration
//Arguments are what is passed in when we call the function
function helloDec(name){

  alert('Hello ' + name);
}
helloDec('Benjamin');

var helloExp = function(first,last){
  alert('Hello ' + first + ' ' + last);
}('Benjamin','Jones');
*/

//Function from a Function

/*function hello(firstname){
  var msg = 'Hello, ' + firstname;
  popup(msg);
}

function popup(x){
  alert(x);
}

hello('Benjamin');
*/

/*function firstname(fname){
  var a = fname;
  lastname(a);
}
firstname('Benjamin');

function lastname(a){
  var b = a + ' Jones'
  pop(b);
}
function pop(c){
  alert('Hello ' + c)
}

*/
//open dungeonScript project folder and on script.js
// create 4 function declarations
//call them: moveNorth, moveEast, moveSouth, moveWest
//console.log the direction that we're moving
//create a function expression called grid
//grid needs to accept two Parameters
//call grid passing 2 numbers (eg: 4, 4 or 8, 8)



document.onkeydown = function(e) {
  switch (e.keyCode){
    case 37:
      console.log('West');
      break;
    case 38:
      console.log('North');
      break;
    case 39:
      console.log('East');
      break;
    case 40:
      console.log('South');
      break;
  }
};
