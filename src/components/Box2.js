import React,{useState} from 'react'

export default function Box2({item, i, onDelete, toggle}) {
    const [left, setLeft] = useState(0);
const [top, setTop] = useState(0);
const [right, setRight] = useState(0);
const [bottom, setBottom] = useState(0);
// const[delete, setDelete] = useState(0);
function handlerSelection(e){
    e.target.style.border = "2px solid blue";
}
var colors = ["#009933", "#006699", "#33cccc", "#99cc00", "#f60", "#000000"];
var random_color = colors[Math.floor(Math.random() * colors.length)];
// arrayBox.style = random_color;
const styles = {
    backgroundColor: random_color,
    top: top,
    left: left
};


function keyDown(e){
    e.target.style.border = "2px solid black";
}
function keyPress(e){
    if(toggle === false){
        console.log(toggle);
    if(e.code=="KeyD" || e.code=="ArrowRight"){
         if(left<=0)
         {
             return
         }
    setLeft((left)=> left - 200);
    } else if(e.code=="KeyA" || e.code=="ArrowLeft"){
        if(left>800)
        {
            return
        }
        setLeft((left)=> left + 200);
    } else if(e.code=="KeyW" || e.code=="ArrowUp"){
        if(top<=0){
            return
        }
        setTop((top)=> top - 200);

    } else if(e.code=="KeyS" || e.code=="ArrowDown"){
        if(top>400)
        {
            return
        }
        setTop((top)=> top + 200);
    }else if(e.code=="Delete"){
        console.log("Diksha");
        onDelete(item);
    }
}
}
  return (
    <div style={styles} tabIndex="0" className={`boxModal boxModal${i+1}`} onClick={handlerSelection} onKeyDown={keyPress} onBlur={keyDown} > {item}</div>
  )
}
