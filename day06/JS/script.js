//var fruits = ['peach','mango','orange','tangerine'];
/*console.log(fruits.length);

fruits.push('clementine');
console.log(fruits);

var join = fruits.join(', ');
console.log(join);

fruits.pop();
console.log(fruits);

fruits.unshift('pear');
console.log(fruits);

fruits.shift();
console.log(fruits);
*/
//console.log(fruits.reverse());

//console.log(fruits.sort());

//var num = [8, 82, 15, 86, 25];
//console.log(num.sort());

//var a = ['a', 2, 1, 'A'];
//console.log(a.sort());

//fruits.splice(x, y, str); // x = index; y = how many; str = what to add

//var b = fruits.splice(2, 2, 'pear', 'clementine');
//console.log(fruits);
//console.log(b);
//slice(x,y); x = begin index; y = end index (does not include that index)

//var myFruits = fruits.slice(1,3);
//console.log(myFruits);

// If Statements

//4!=5

//console.log(1);
//console.log(!1);
//console.log(!!1);
//if(/*if is true*/true){
  // run this code
  //alert('It is true!');
//}else{
  //alert('It is false!')
//}
/*
var userResp = prompt('Do you like cats?')

if(userResp == 'yes'){
  alert('Neko Neko!')
}else if(userResp == 'sometimes'){
  alert('Reptiles then?')
}
else{
  alert('*Rolls Eyes*')
}
*/
// && = and
// || = or
/*
var randNum = Math.floor(Math.random()*11);
var userGuess = parseInt(prompt('Pick a number between 0 and 10'));
console.log(randNum);
if(userGuess<=10&&userGuess>=0){
if(userGuess==randNum){
  alert('Correct!');
}else if(userGuess>randNum){
  alert('Too high!');
}else if(userGuess<randNum){
  alert('Too low!');
  }
}else{
  alert('Pick a number BETWEEN 0 & 10')
}
*/

var gender=prompt('What is your gender?');
if(gender=='male'||gender=='female'){
  var iceCream = prompt('Do you like ice cream?');
}else if(iceCream='yes'){
  alert('User is '+ gender + ', and likes Ice Cream');
}else if(iceCream='no'){
  alert('User is '+gender+', and does not like Ice Cream');
}
