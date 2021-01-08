import { Add_TODO  , DELETE_TODO , Update_todo , Comp_lete, Done, Undone } from './action'
import {todos} from './state'
export let reducer = (state = todos,action)=> { 
 let  newTodos 
    switch (action.type) { 
        // input 
    case Add_TODO :
        newTodos = [...state,action.payload];  
        return newTodos;
        case DELETE_TODO  :
            newTodos = [...state]; 
            newTodos = newTodos.filter(todo => todo.id!==action.payload)
            return newTodos
            
            case Update_todo:
                newTodos = [...state]; 
                let index = -1 ;
                for(let i =0 ; i<newTodos.length; i++) { 
                    index++;
                    if(newTodos[i].id == action.payload.id) { 
                        break;
                    }
                   
                 }
       
        console.log(index) ;
        if( index != -1) {
            newTodos[index] = action.payload;
            console.log(newTodos)
        return newTodos;
    }
    case Comp_lete : 
    newTodos = [...state]; 
    newTodos = newTodos.map(el => el.id===action.payload ?  {...el,complete:!el.complete} : el)
    return newTodos
//    return { 
    // ...state,todos:state.todos.map(el => el.id === action.payload ? !todos.complete  :  todos.complete )
//    }
    
    
    default : return state
    
}
}