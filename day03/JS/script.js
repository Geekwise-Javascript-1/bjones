/*var theDate = new Date();
console.log(theDate);
console.log(theDate.getDate());
console.log(theDate.getFullYear());
console.log(theDate.getDay());
console.log(theDate.getMonth());
console.log(theDate.toLocaleString('us-en', {weekday: 'short', month: 'long', year: 'numeric'}));
*/

/*var a = prompt('First Name?');
var b = prompt('Last Name?');
var c = new Date (prompt('Date of Birth? (Please format as mm/dd/yyyy)'));
alert(a + ' ' + b + "'s Birthday is: " + c.toLocaleString('us-en', {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'}));
*/

//String Object Manipulation

/*var firstName = prompt('Enter your first name:');
console.log(firstName.length);
console.log(firstName.indexOf('e'));
console.log(firstName.charAt(firstName.length -1));
var lastName = prompt ('Enter your last name:');
console.log(firstName.concat(' ').concat(lastName));
var name = firstName.concat(' ').concat(lastName);
console.log(name.substring( 0, firstName.length ));
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(firstName.trim());
*/

var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');
console.log(firstName);
console.log(lastName);
firstName = firstName.toLowerCase();
lastName = lastName.toLowerCase();
firstName = (firstName.charAt(0).toUpperCase()+firstName.substring(1, firstName.length));
lastName = lastName.charAt(0).toUpperCase()+lastName.substr(1, lastName.length -1);
alert(firstName.concat( ' ' ).concat(lastName));
//firstName = firstName.charAt(0).toUpperCase(); + a.substr(1, a.length);
//lastName = lastName.charAt(0).toUpperCase();
//console.log(firstName.substring(0, firstName.length -1));
//console.log(firstName.substr(0, firstName.length -1));
