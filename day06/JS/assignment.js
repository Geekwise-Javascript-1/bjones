// To Do List!

// minimum requirements:
// Capture user input into an array
// do you want to add more?
// no? alert all items
// yes? add to array

// Challenge:
// edge casing:
// handle the escape, cancel, okay, and enter keys
// is the answer numbers, blanks or spaces? and fix them in final list
// use functions to repeat actions!!!!

var todos = new Array;
function get_todos() {
    var todos_str = localStorage.getItem('todo');
    // if (todos_str !== null) {
    //     todos.push(JSON.parse(todos_str));
    //   add();
    // }
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
console.log(todos);
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function show() {
    var todos = get_todos();

    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

var a = document.getElementById('add');
a.addEventListener('click', function(e){
  // e.preventDefault();
  console.log(e);
  add();
});
show();
