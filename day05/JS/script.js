// IIFE - Immediately Invoked Function Executable
/*(function(){
  var firstName = 'Benjamin'
  var middleName = 'Emerson'
  var lastName = 'Jones'
  //console.log(firstName);
}());

function getNums(){
  var a = parseInt( prompt('Pick a number:'));
  var b = parseInt( prompt('Pick another number:'));
  console.log(doMath(a,b));
}
//getNums();
function doMath(num1,num2){
return num1 + num2;
}

function funDec(x){
  var movie = 'My favorite movie is: ';
  return movie + x;
};
(function(){
  var faveMovie = prompt('What is your favorite movie?')
  funDec(faveMovie);
  alert( funDec(faveMovie));
}());





function one(){
  alert('This is function one');
}
var two = function(){
  alert('This is function two');
}()
*/

//Loops
// for Loops
// while Loops
// do/while Loops

//for Loop
var fruits = ['orange','mango','pineapple','apple','watermelon','tangerine','peach'];
//console.log(fruits);

//console.log(fruits[0]);
for(var i = 0; i < fruits.length; i++){
  //console.log(fruits[i]);
}
var monsters = ['grell','troll','dragon','worg','vampire']
var strength = [5,20,75,15,50]
for(var a = 0; a < monsters.length; a++){
console.log(monsters[a] + ' has a strength of ' + strength[a]+ ' points');
}

// while Loops
var text = ' ';
var i = 0;
while (i<monsters.length) {
  console.log(monsters[i] + ' has a strength of '+strength[i]+'points');
  i++;
}
