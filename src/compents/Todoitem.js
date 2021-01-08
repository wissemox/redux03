import React , { useState } from 'react'
import { DeletTodo, updateTodo ,complete   } from './redux/action'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
function Todoitem({ el }) {
    let wissem = useSelector(state => state.complete)
    console.log(wissem)
    
  
    const [editt , setEditt] =useState(false)
    const [name , setName] =useState(el.name) 
     const dispatch = useDispatch() ;
    return (
        <div >
            {console.log(el.complete)}
            <div className="row"> 
            {editt ? <input type="text" className="form-control" placeholder={el.name} value={name}
            onChange={ 
                (e)=>setName(e.target.value)
            }/> : <p style={el.complete? {textDecoration:"line-through"} : {textDecoration:"none"}}>{el.name}</p>  }
               
            {el.complete}
                <button onClick={()=>{ if(editt) { setName('') ;
                }

                console.log("upadte")
                    dispatch(updateTodo(
                        {
                            ...el, 
                            name : name
                        }
                    ))
                    setEditt(!editt)
                    if(editt) { 
                        setName(name);
                    }
                }}>{editt ? "updateEdit" : "Edit"}</button>
                <button
                    onClick = {()=> dispatch(DeletTodo(el.id))}
                >Delete</button>
                <button onClick={()=>dispatch(complete(el.id))}> {el.complete ? "undo" : "complete"} </button> 
            
            </div>
        </div>
    )
}

export default Todoitem
