import './Task.css'
import { useState } from 'react';

export default function ({text,key}) {
    
    const[listInput,setListInput] = useState(text);
   

    let updateListinput = (event) => {
        setListInput(event.target.value);
    }

    let toggle_btn = (event) => {
       
        let i = document.createElement("i");
        event.target.appendChild(i);
        i.className = "fa-solid fa-check right";
        i.onclick = toggle_i;
    }

    let toggle_i = (event) => {
    event.target.remove();
    }

    let removeTask = (event) => {
    event.target.parentNode.parentNode.remove();
    }

    let edit = (event) => {
       
        event.target.parentNode.childNodes[1].style.display = "block"
        event.target.style.display = "none";
        event.target.parentNode.parentNode.children[1].disabled = false ;
        event.target.parentNode.parentNode.children[1].focus();
    }
       
    let edited = (event) => {
        event.target.parentNode.childNodes[0].style.display = "block"
        event.target.style.display = "none";
        event.target.parentNode.parentNode.children[1].disabled = true ;
    }

    return(
    
        <div className='Task' key={key}>
            <div className='toggle-btn' onClick={toggle_btn}></div> 
            <input type="text" className='doTask' value={listInput} disabled onChange={updateListinput}/> 
            <button className='btn1' >
                <i onClick={edit} className="fa-solid fa-pen-to-square"></i>
                <i onClick={edited} className="fa-solid fa-floppy-disk" style={{display:"none"}}></i></button>
            <button className='btn2' ><i onClick={removeTask} className="fa-solid fa-circle-xmark"></i></button>
        </div>    
    
    )
}