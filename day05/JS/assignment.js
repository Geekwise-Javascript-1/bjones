function funDec(x){
  var movie = 'My favorite movie is: ';
  return movie + x;
};
(function(){
  var faveMovie = prompt('What is your favorite movie?')
  alert( funDec(faveMovie));
}());


var monsters = ['grell','troll','dragon','worg','vampire']
var strength = [5,20,75,15,50]
for(var a = 0; a < monsters.length; a++){
console.log(monsters[a] + ' has a strength of ' + strength[a]+ ' points');
}


var i = 0;
while (i<monsters.length){
console.log(monsters[i] + ' has a strength of '+strength[i]+' points');
i++;
}
