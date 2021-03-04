const actionTypes = {
    CREATE_TODO: 'CREATE_TODO',
    UPDATED_TODO: 'UPDATED_TODO',
    DELETE_TODO: 'DELETE_TODO',
};

const initialState = {
    todos: []
};

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CREATE_TODO:
            return {...state, todos:[...state.todos, action.data]}
        case actionTypes.UPDATED_TODO:
            return {...state, todos: action.data} 
        case actionTypes.DELETE_TODO:
            return {...state, todos: action.data}
        default:
            return state;
    }
}

export default todoReducer;