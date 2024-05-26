import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import checkAuth from "../auth/checkAuth";
import { useSelector } from "react-redux";

function Editpost(){
    var user = useSelector((store) => store.auth.user);
    const {postId} = useParams();
    const [name, setname] = useState('');
    const [company, setcompany] = useState('');
    const [expry, setexpry] = useState('');
    let navigate = useNavigate();
    useEffect(() => {
        if (user?.token) {
        axios.get('https://medicalstore.mashupstack.com/api/medicine/'+postId,{
            headers: { Authorization: "Bearer " + user.token },
        }).then(response=>{
            console.log(response.data)
            setname(response.data.name);
            setcompany(response.data.company);
            setexpry(response.data.expiry_date)

        })
    }
    },[postId, user.token]);

    function addedit(){

        axios.post('https://medicalstore.mashupstack.com/api/medicine/'+postId,{
            name: name,
            country: company,
            expiry_date: expry
        },{
            headers: { Authorization: "Bearer " + user.token },
        }).then(response=>{
            alert(response.data.message)
        })
        navigate('/blog');
    };
    return(
        <div>
            <Navbar/>
            <div className="container">
                <div className="Row justify-content-center align-items-center" style={{ minHeight: "650px" }}>
                    <div className="col-md-8 offset-2">
                        <div className="border order rounded p-4" style={{backgroundColor:"DarkCyan", borderRadius: "15px", boxShadow: "0 0 10px 	rgb(0,0,0)" }}>
                        <h1 className="text-center">Creat Post</h1>
                        <div className="form-group">
                            <label>title:</label>
                            <input className="form-control" type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <label>content:</label>
                            <input className="form-control" value={company} onChange={(e)=>{setcompany(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <label>expiry:</label>
                            <input className="form-control" value={expry} onChange={(e)=>{setexpry(e.target.value)}}/>
                        </div>
                        <div className="form-group text-center">
                            <button className="btn btn-primary form-control" onClick={addedit}>submit</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default checkAuth(Editpost);