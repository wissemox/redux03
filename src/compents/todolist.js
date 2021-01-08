import React from 'react'
import Todoitem from './Todoitem'
import { useSelector } from 'react-redux'
function Todolist() {
    let todos = useSelector(state => state.reducer)
    let ahlabia = useSelector(state => state.reducer02)
    let result=[]
    if(ahlabia==="all"){
        result=todos
    } else if(ahlabia==="done02"){
        result=todos.filter((el)=>el.complete===true)
    } else if(ahlabia==="undone02") { 
        result=todos.filter((el)=>el.complete===false)
    }
    return (
        <div> 
            {console.log(ahlabia)}
           {console.log(todos)}
        {result.map(el=>{ 
            return <Todoitem key={todos.id} el={el}/>
        })}
           
        </div>
    )
}
export default Todolist
