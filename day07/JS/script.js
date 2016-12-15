/*(function(){
var createShoppingList = function(){
var todo = [];
todo.push(prompt('What is the first item on your shopping list?'));
for(var moreTodo = true; moreTodo;){
  if(confirm('Any more items?')){
    addTodoItem(todo);
  }else{
    moreTodo = false;
    printTodoList(todo);
    }
  }
}();

function addTodoItem(todo){
  todo.push(prompt('What is the next item?'));
}

function printTodoList(todo){
  var msg = '';
  for(var i = 0; i < todo.length; i++){
    msg += ' - ' + todo[i]+'\n';
  }
  alert('My Shopping List: \n'+msg);
}
})();
*/
/*
NOT OKAY:
Esc = null
Cancel = null
Enter = '  '
Okay = '  '
Spaces
Numbers

OKAY:
Spaces...Item...Spaces
*/
(function(){
var todo = [];
var item = prompt('What is your first item?');

if(isValid(item)){
  addTodo(item);
  checkIfMore();
}

function isValid(item) {
if(item !== null){
  if(item.trim() !== '' && parseInt(item)){
      return true;
  }else{
    alert('Invalid Input');
        return false;
  }
    }else{
      alert('Invalid Input');
        return false;
  }
}

function addTodo(item){
  todo.push(item);
}
function checkIfMore(){
  for(var moreTodo = true; moreTodo;){
    if(confirm('Want to add more?')){
      askMore();
    }else{
      moreTodo=false;
      craftMsg();
    }
  }
}

function askMore(){
  var item = prompt('Next Item:');
    if(isValid(item)){
        addTodo(item);
      }
}

function craftMsg(){
  var msg = '';
  for(var i = 0; i < todo.length; i++){
    msg += ' - ' + todo[i] + '\n';
  }
    alert('Shopping List: \n ' + msg);
  }
}());
