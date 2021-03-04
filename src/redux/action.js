export const createTodo = data => dispatch => {
    dispatch({ type: 'CREATE_TODO', data })
}

export const updatedTodo = (todos, todoById) => dispatch => {
    const {_id} = todoById;
    const foundIndex = todos.findIndex(item => item._id === _id);
    const todoObj = todos[foundIndex];
    const newTodoObj = { ...todoObj, status: !todoObj.status };

    const firstArray = todos.slice(0, foundIndex);
    const lastArray = todos.slice(foundIndex + 1);
    const newTodos = [...firstArray, newTodoObj, ...lastArray];

    dispatch({ type: 'UPDATED_TODO', data: newTodos })
}

export const deleteTodo = (todos, todoById) => dispatch => {
    const {_id} = todoById;
    const foundIndex = todos.findIndex(item => item._id === _id);

    const firstArray = todos.slice(0, foundIndex);
    const lastArray = todos.slice(foundIndex + 1);
    const newTodos = [...firstArray, ...lastArray];

    dispatch({ type: 'DELETE_TODO', data: newTodos })
}