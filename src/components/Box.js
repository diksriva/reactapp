import React, {useState} from 'react'
import Box2 from './Box2.js';
import {Switch} from "antd";

export default function Box() {
const [likeCount, setlikeCount] = useState(0);
const [toggle, setToggle] = useState(false);
const [arrayBox, setArrayBox] = useState([]);
    function addNumberCount(){
        setlikeCount(function(prev){
            setArrayBox([...arrayBox, prev+1])
            return prev + 1;
        })

    }
    const toggler = () =>{
        toggle ? setToggle(false): setToggle(true);
    }
    
     function onDelete(item){
     const newArray = arrayBox.filter((element)=>{
     return element != item;
   
})
setArrayBox(newArray);
     }
    
    
   
    
  return (
      <>
    <div className='container'>
        {arrayBox.map((item, i)=>{
            return <Box2 key={i} item={item} onDelete={onDelete} toggle={toggle} i={i}/>;
        })}
   
    </div>
       <button className="addCount" onClick={addNumberCount} >Add</button>
       <Switch onClick={toggler} />
       {/* {toggle ? <span>Well done it ya changed me!</span>:<span>Wao still the same old same</span>} */}
       </>
  )
}

