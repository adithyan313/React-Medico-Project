import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Register() {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const registerUser = (event) => {
        event.preventDefault();
        
        const user = {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConf,
        };

        axios.post('https://medicalstore.mashupstack.com/api/register', user)
            .then((response) => {
                setErrorMessage('');
                navigate('/');
            })
            .catch((error) => {
                if (error.response?.data?.errors) {
                    setErrorMessage(Object.values(error.response.data.errors).join(' '));
                } else {
                    setErrorMessage('Failed to connect to API');
                }
            });
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row justify-content-center align-items-center" style={{ minHeight: "620px" }}>
                <div className="col-md-6">
                    <div className="border order rounded p-4" style={{backgroundColor:"DarkCyan", borderRadius: "15px", boxShadow: "0 0 10px 	rgb(0,0,0)" }}>
                        <center><h1>Sign Up</h1></center>
                        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                        <form onSubmit={registerUser}>
                            <div className="form-group">
                                <input type="text" className="form-control" value={name} onChange={(event) => setName(event.target.value)} placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="user@gmail.com" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" value={passwordConf} onChange={(event) => setPasswordConf(event.target.value)} placeholder="Confo_Password" />
                            </div>
                            <div className="form-group text-center">
                                <button className="btn btn-primary form-control" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
