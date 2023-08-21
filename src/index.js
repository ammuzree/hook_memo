import React,{useState,useMemo} from 'react';
import ReactDOM from 'react-dom/client';

function App(){
const [count,setCount]=useState(0);
const [dark,setDark] = useState(false);
const newFun =useMemo(()=>{ return myThem(count)},[count]);

const thems = {
backgroundColor : dark ? 'blue':'white',
color : dark ? 'pink':'black'

};


  return(<>
  <p>That is the momo method</p>
  <input type="number" value={count} onChange={(e)=>{setCount(e.target.value)}}/>
  <button onClick={()=>setDark(item=>!item)}>Them</button>
  <div style={thems}>{newFun}</div>

  </>);
}


function myThem(count){

  console.log('action');
  for(let i=0; i<=100; i++){
    return count+2;
  }

}

const root = ReactDOM.createRoot(document.getElementById('txt'));
root.render(<App/>);