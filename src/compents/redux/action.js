export const Add_TODO = "ADD_TODO"
export function addTodo(todo) { 
    return { 
        type : Add_TODO,
        payload : todo,
    }
}
export const DELETE_TODO = "DELETE_TODO "
export function DeletTodo(todoId) { 
    return { 
        type : DELETE_TODO ,
        payload : todoId,
    }
}
export const Update_todo = "Update_todo"
export function updateTodo(todoId) { 
    return {  
        type :Update_todo,
        payload : todoId,
    }
}
export const Comp_lete = "COMPLETE"
export function complete(todoId) { 
    return {  
        type :Comp_lete,
        payload : todoId,
    }
}
export const Done = "Done"
export function done() { 
    return {  
        type :Done,
        
    }
}
export const Undone = "Undone"
export function undone() { 
    return {  
        type :Undone,
        
    }
}