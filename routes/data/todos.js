// simple in-memory data store (BUG-5: missing module.exports)
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
      const id = todos.length + 1;
      todos.push({ id, title: todo.title });
      resolve(todos[todos.length - 1]);
    }, 50);
  });
}

function deleteTodo(id) {
  // BUG-4: wrong deletion by using id as index instead of findIndex
  todos.splice(id, 1);
  return true;
}
