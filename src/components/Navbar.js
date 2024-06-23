import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/authSlice";

function Navbar() {
    const user = useSelector((store) => store.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function Logout() {
        if (user) {
            axios
                .post(
                    "https://medicalstore.mashupstack.com/api/logout", 
                    {},
                    {
                        headers: { Authorization: "Bearer " + user.token },
                    }
                )
                .then(() => {
                    dispatch(removeUser());
                    navigate("/login");
                })
                .catch((error) => {
                    console.log("Logout error");
                });
        }
    }

    return (
        <>
            <style>{`
                .nav-link {
                    position: relative;
                    display: inline-block;
                    padding: 10px 15px;
                    text-decoration: none;
                    color: #fff;
                    overflow: hidden;
                    transition: color 0.4s;
                }

                .nav-link::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 300%;
                    height: 300%;
                    background-color: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transition: width 0.4s, height 0.4s, top 0.4s, left 0.4s;
                    z-index: 0;
                    transform: translate(-50%, -50%);
                }

                .nav-link:hover::before,
                .nav-link:focus::before,
                .nav-link.active::before {
                    width: 0;
                    height: 0;
                    top: 50%;
                    left: 50%;
                }

                .nav-link:hover,
                .nav-link:focus,
                .nav-link.active {
                    color: #ff6347;  /* Change this to desired hover/active color */
                }

                .nav-link span {
                    position: relative;
                    z-index: 1;
                }
            `}</style>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="navbar-brand">
                    <h4 style={{color:"green"}}>Medical🩺</h4>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                    style={{ float: "left" }}
                >
                    <ul className="navbar-nav ml-auto" style={{ color: "#ffffff" }}>
                        {user ? (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" onClick={Logout}>
                                        Logout
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/blog"} className={"nav-link"}>
                                        Blog
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <NavLink to={"/"} className={"nav-link"}>
                                        Login
                                    </NavLink>
                                </li>
            <li className="nav-item">
                                    <NavLink to={"/signup"} className={"nav-link"}>
                         Sign Up
                                    </NavLink>
                                </li>
                            </>
                        )}
        </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
