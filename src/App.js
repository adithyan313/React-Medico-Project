/*
function app(){
  return(
    <dev>
      <h1>hello earth</h1>
    </dev>
  );
}
export default app;
*/
/*
function apple(){
  let hai = "hello world";
  return(
    <dev>
      <h1 style={{color:"blue"}}>welcome {hai}</h1>
    </dev>
  );
}
export default apple;
*/
/*import "./App.css";
function apple(){
  //let hellostyle = {"color":"green"}
  let hello = "hai world"
  return(
    <div>
      <h1 className="hellostyle">{hello}</h1>
    </div>
  );
}
export default apple;*/
/*import React from "react";

function apple(){
  return(
    <dev className="container">
      <dev className="row">
        <dev className="col-md-4 bg-primary mr-2">colom 1</dev>
        <div className="col-md-4 bg-success">colom 2</div>
      </dev>

    </dev>
  );
};
export default apple;*/

/*import "./App.css";
import image from "./images/milli.jpg"

function loloa() {
  let pro = "hello earth";
  let x = true;
  console.log(pro); 
  if (x) {
    var ilove = <h1 className="hellostyle">{pro}</h1>
  }else{
    var ilove = null
  }
  return(
    <div>
    {ilove}
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7POmCm9EGQ5VYfKEBhLRXAySsaU5eRKedQ&s" alt="starngerthinga"/>
    <img src={image} alt="milli"/>
    </div>
  );
}
export default loloa;*/

/*function count(){
  let id = 1;
  let mark = 90.5;
  let name= "john"
  const x = true;
  const counts = ["html","javascript","python","css"]
  return(
    <div>
      <p>ID is: {id}</p>
      <p>MARK is: {mark}</p>
      <p>NAME is: {name}</p>
      <p>{x.toString()}</p>
      <p>{counts[0]}</p>
    </div>
  );
}
export default count;*/

/*import image from "./images/dog.jpg"

function green(){
  let pets = ["cat","dog","cow","got","lion"];
  let petslist = [ ];
  for (let i=0; i < pets.length; i++) {
    petslist.push(<li key={i}> {pets[i]} </li>);
    
  }
  return(
    <div>
      <img src={image} alt="animal"/>
      {pets[1]}
      {pets.map((item)=>{return<p>{item}</p>})}
      <ul>{petslist}</ul>
    </div>
  );
}
export default App;

/*function obj() {
  let list = [{name:"naruto",location:"leaf"},{name:"hinata",location:"leaf"}];
  return(
    <div>
      {list[1].name}
      {list.map((item)=>{return<p>{item.name} is from {item.location}</p>})}
    </div>
  );
}
export default obj;*/

import React from "react";
import Navbar from "./components/Navbar";

function butclick(){
  console.log("hello everyone am earth speaking")
};

function atry(){
  let hello = "naruto";
  let hai = ["naruto","hinata","sasuke","sakura"];
  let bye = {name:"naruto",location:"leaf"};
  return(
    <div>
      <Navbar />
    <h1>home page</h1>
      <input type="text" value={hello}/><br/>
      <input type="text" value={hai[1]}/><br/>
      <input type="text" value={bye.name}/><br/>
      <button onClick={()=>{console.log("welcome")}}>clickme</button><br/>
      <button onClick={butclick}>clickme</button>
    </div>
  );
}
export default atry;

