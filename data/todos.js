// fixed in-memory data module
let todos = [
  { id: 1, title: 'Belajar JS' },
  { id: 2, title: 'Buat README' }
];

function getTodos() {
  return todos;
}

function addTodo(todo) {
  // simulate async op
  return new Promise((resolve) => {
    setTimeout(() => {
      const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
      const newTodo = { id, title: todo.title };
      todos.push(newTodo);
      resolve(newTodo);
    }, 50);
  });
}

function deleteTodo(id) {
  // BUG-4: wrong deletion by using id as index instead of findIndex
  todos.splice(id, 1);
  return true;
}
