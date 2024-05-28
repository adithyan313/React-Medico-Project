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
        <div id="video-container" style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
            <style>
                {`
                    .transparent-input {
                        background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent background */
                        border: 1px solid rgba(255, 255, 255, 0.6); /* Semi-transparent border */
                        color: white; /* White text color */
                    }
                    .transparent-input::placeholder {
                        color: rgba(255, 255, 255, 0.6); /* Semi-transparent placeholder text */
                    }
                    .transparent-button {
                        background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent background */
                        border: 1px solid rgba(255, 255, 255, 0.6); /* Semi-transparent border */
                        color: white; /* White text color */
                    }
                    .transparent-button:hover {
                        background-color: rgba(255, 255, 255, 0.4); /* Slightly more opaque on hover */
                    }
                `}
            </style>
            <video
                autoPlay
                loop
                muted
                id="background-video"
                style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", objectFit: "cover" }}
            >
                <source src="/video/background-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div>
                <Navbar />
                <div className="container">
                    <div className="row justify-content-center align-items-center" style={{ minHeight: "620px" }}>
                        <div className="col-md-6">
                            <div>
                                <h1 className="text-center text-white">Login</h1>
                                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                                <form>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control transparent-input"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                            placeholder="Username"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className="form-control transparent-input"
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="form-group text-center">
                                        <button
                                            type="button"
                                            className="btn btn-primary form-control transparent-button"
                                            onClick={userLogin}
                                        >
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
