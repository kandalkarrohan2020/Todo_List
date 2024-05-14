import { useEffect, useState } from 'react';
import './TodoList.css'
import Task from './Task';

export default function TodoList () {
    const [input,setInput] = useState("");
    const [list,setList] = useState([]);
    const[text,setText] = useState(input);
    const[key,setKey] = useState(0);
   

    useEffect(()=> {
        setKey((prev)=> {prev+1});
    },[text]);

    
    function addInput(event) {
        setInput(event.target.value);
    }
       
       let AddTask = (event) => {
          if(input != ""){
            list.push(1);
            setInput("");
            setText(input);
           
          } 
          else {
            alert("Write SomeThing");
          }
           
       }
       
      
    return(
        
        <div className='TodoList'>
            <div className='input-box'>
                <input className='input' type="text" value={input} onChange={addInput} placeholder='Add_task'/>
                <button onClick={AddTask}>ADD</button>
            </div>
            {list.map(()=>{
                return(
                    <Task text={text} kay={key}/>
                )
            })}
            
         </div>
    )
}

