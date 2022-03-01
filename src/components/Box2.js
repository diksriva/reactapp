import React,{useState} from 'react'

export default function Box2({item, i, onDelete, toggle}) {
    const [left, setLeft] = useState(0);
const [top, setTop] = useState(0);
// const[delete, setDelete] = useState(0);
function handlerSelection(e){
    e.target.style.border = "2px solid blue";
}
var colors = ["#009933", "#006699", "#33cccc", "#99cc00", "#f60", "#000000" , "#6bf3fc" , "#d9bbe2" , "#bdcfdf" , "#5a761d" , "#088da5" , "#20b2aa"];
//var random_color = colors[Math.floor(Math.random() * colors.length)];
// arrayBox.style = random_color;
const styles = {
    backgroundColor: colors[item%colors.length],
    top: top,
    left: left
};


function keyDown(e){
    e.target.style.border = "0px";
}

function keyPress(e){
    if(toggle === false){
    if(e.code=="KeyA" || e.code=="ArrowLeft"){
         if(left<=0)
         {
             return
         }
    setLeft((left)=> left - 200);
    } else if(e.code=="KeyD" || e.code=="ArrowRight"){
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
        onDelete(item);
    }
}
}
  return (
    <div style={styles} tabIndex="0" className={`boxModal boxModal${i+1}`} onClick={handlerSelection} onKeyDown={keyPress} onBlur={keyDown} > {item}</div>
  )
}
