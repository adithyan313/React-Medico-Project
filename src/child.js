import React, {useState} from "react";

function Child(props){
    function hellohai(){
        props.nstruct()
    };
    const [data, setdata] = useState('null');
    const handilclick = () => {
        const newdata = "roman reigns"
        setdata(newdata);
        props.ondatafromchild(newdata);
    }
    return(
        <div>
            <p>name is {props.name}</p>
            <p>age is {props.aga}</p>
            <p>{props.children}</p>
            <button onClick={hellohai}>click</button>
            <button onClick={handilclick}>click</button>
            <p>data in child component: {data}</p>
        </div>
    );
}
export default Child;