import React , { useState } from 'react'
import { addTodo , done , undone } from './redux/action'
import { useDispatch } from 'react-redux'
import {done02,undone02,all} from './redux/action02'

function Todoinput({setFilter}) {
    const [name , setName] = useState()
    
   const disptach = useDispatch()

    return (
        <div className="inputt">
            <div>
            <button onClick={()=>disptach(undone02())}> undone</button>
            <button onClick={()=>disptach(done02())} > done</button>
            <button  onClick={()=>disptach(all())} >all</button>
            </div>
            {console.log(name)}
            <input onChange={(e)=>setName(e.target.value)}  value = {name} type="text" />
           <div>
            <button  
            onClick={()=>disptach(addTodo({
                id : Math.random() ,
                name : name,
                complete : false
                
            } ,setName(" ")
            ))}
            > add</button>
            </div>
        </div>
    )
}

export default Todoinput
