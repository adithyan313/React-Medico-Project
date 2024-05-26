import React, {useState, useEffect} from "react";
import Child from "./child";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import checkAuth from "./components/auth/checkAuth";

function App(){
  const [count, setCount] = useState(5);
  const handilclick = () => {
    setCount(count * 2);
  };
  const [name, setname] = useState('');
  
  function onchange(event){
    setname(event.target.value);
  };
  const [names, setnames] = useState('');

  const onmoved = (ee) => {
    ee.preventDefault();
    alert(`hello, ${names}!`);
    setnames(" ");
  };
    const name1 = "Adithyan";
    const age1 = 21;

    const [counts, setCounts] = useState(0);
    function onthemove(){
      setCounts(counts + 1)
    };
    
    const [datafromchild, setdatafromchild] = useState('null');
    
    const handildatafromchild = (data) => {
      setdatafromchild(data);
    };
    const [counts1, setCounts1] = useState(0);

    useEffect(() =>{
      console.log(`component hes rendered ${counts1}`)
    }, [counts1]);

    /*const coundefect = () =>{
      setCounts1(counts1 + 1)
    };*/
  return<div>
    <div>
      <Navbar/>
      <p id="baby">count is:{count}</p>
      <button onClick={handilclick}>increase</button><br/>
      <label>name</label><br/>
      <input type="text" value={name} onChange={onchange}/>
      <p>hello {name}!</p><br/><br/> 

      <form id="demo" onSubmit={onmoved}>
        <h1 style={{color:"green"}}>simple form state</h1>
        <label>names</label>
        <input type="text" id="names" value={names} onChange={(e) => setnames(e.target.value)} required/>
        <button type="submit">submit</button>
      </form>
      <Child name={name1} aga={age1} nstruct = {onthemove} ondatafromchild = {handildatafromchild}>
        <p>hello welcome to earth</p>
        <p>counts: {counts}</p>
        <p>data from child component: {datafromchild}</p>
      </Child>
      <p>counr: {counts1}</p>
      <button onClick={() => setCounts1(counts1 + 1)}>increment count</button>

      <Link to="/">go home</Link>
      </div>
</div>;
}
export default checkAuth(App);