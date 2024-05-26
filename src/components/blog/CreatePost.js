import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import checkAuth from "../auth/checkAuth";
import { useSelector } from "react-redux";

function CreatePost() {
    var user = useSelector(store=>store.auth.user);
    const [name, setname] = useState('');
    const [company, setcompany] = useState('');
    const [expiry, setexpiry] = useState('');
    const navigate = useNavigate();

    function addPost() {
        axios.post('https://medicalstore.mashupstack.com/api/medicine',{
            name: name,
            company: company,
            expiry_date: expiry
        },{
            headers:{'Authorization':"Bearer "+user.token}
        }).then(response => {
            navigate('/blog');
        }).catch(error => {
            console.error('Error adding post:', error);
        });
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row justify-content-center align-items-center" style={{ minHeight: "620px" }}>
                    <div className="col-md-6">
                        <div className="border order rounded p-4" style={{backgroundColor:"DarkCyan", borderRadius: "15px", boxShadow: "0 0 10px 	rgb(0,0,0)" }}>
                        <h1 className="text-center">Create Post</h1>
                        <div className="form-group">
                            <label>Name:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={name} 
                                onChange={(event) => setname(event.target.value)}
                            />
                        </div>
                       <div className="form-group">
                            <label>Company:</label>
                            <textarea 
                                 className="form-control" 
                                value={company} 
                                onChange={(event) => setcompany(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>expiry_date:</label>
                            <textarea 
                                 className="form-control" 
                                value={expiry} 
                                onChange={(event) => setexpiry(event.target.value)}
                            />
                        </div>
                        <div className="form-group text-center">
                            <button className="btn btn-primary form-control" onClick={addPost}>Submit</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default checkAuth(CreatePost);
