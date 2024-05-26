/*import React from "react";
import axios from "axios";
import { useState } from "react";
import Navbar from "../Navbar";
import { setUser } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import checkguest from "./checkguest";
import { useNavigate } from "react-router-dom";

function Loginuser() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function userLogin() {
        axios.post('https://medicalstore.mashupstack.com/api/login', {
            email: email,
            password: password
        }).then(response => {
            setErrorMessage('');
            console.log(response.data.token)
            const user = {
                email: email,
                token: response.data.token
            }
            dispatch(setUser(user));
        }).catch(error => {
            if (error.response.data.errors) {
                setErrorMessage(Object.values(error.response.data.errors).join(' '));
            } else if (error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('Failed to login user. Please contact admin');
            }
        });
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row justify-content-center align-items-center" style={{ minHeight: "620px" }}>
                    <div className="col-md-6">
                        <div className="login-form border rounded p-4" style={{backgroundColor:"PaleTurquoise", borderRadius: "15px", boxShadow: "0 0 10px 	rgb(0,0,0)" }}>
                            <h1 className="text-center">Login</h1>
                            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                            <form>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input type="text" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Password:</label>
                                    <input type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
                                </div>
                                <div className="form-group text-center">
                                    <button type="button" className="btn btn-primary" onClick={userLogin}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default checkguest(Loginuser);*/
import React from "react";
import axios from "axios";
import { useState } from "react";
import Navbar from "../Navbar";
import { setUser } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Loginuser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function userLogin() {
        axios
            .post("https://medicalstore.mashupstack.com/api/login", {
                email: email,
                password: password,
            })
            .then((response) => {
                setErrorMessage("");
                const user = {
                    email: email,
                    token: response.data.token,
                };
                dispatch(setUser(user));

                // Redirect to the "/list" route after successful login
                navigate("/blog");
            })
            .catch((error) => {
                if (error.response?.data?.errors) {
                    setErrorMessage(Object.values(error.response.data.errors).join(" "));
                } else if (error.response?.data?.message) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage("Failed to login user. Please contact admin");
                }
            });
    }

    return (
        <div id="video-container" style={{position:"relative", width:"100vw", height:"100vh", overflow:"hidden"}}>
      <video
        autoPlay
        loop
        muted
        id="background-video"
        style={{position:"absolute", top:"0", left:"0", width:"100%", height:"100%", objectFit:"cover"}}
      >
        <source src="/video/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div>
            <Navbar />
            <div className="container">
                <div className="row justify-content-center align-items-center" style={{ minHeight: "620px" }}>
                    <div className="col-md-6">
                        <div
                            className="login-form border rounded p-4"
                            style={{
                                backgroundColor: "DarkCyan",
                                borderRadius: "15px",
                                boxShadow: "0 0 10px rgb(0, 0, 0)",
                            }}
                        >
                            <h1 className="text-center">Login</h1>
                            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                            <form>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input type="text" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Password:</label>
                                    <input type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
                                </div>
                                <div className="form-group text-center">
                                    <button type="button" className="btn btn-primary form-control" onClick={userLogin}>
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Loginuser;

