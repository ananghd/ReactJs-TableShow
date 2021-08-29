export const ADD_TODO = 'add_todo';

let nextTodoId = 0;

const addTodo = function(text) {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  };
};

export default addTodo;
