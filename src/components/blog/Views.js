import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import checkAuth from "../auth/checkAuth";
import { useSelector } from "react-redux";

function Views() {
  const user = useSelector((store) => store.auth.user); 
  const { postId } = useParams();

  const [post, setPost] = useState({ name: "", company: "", expiry_date: "" });

  useEffect(() => {
    if (user?.token) {
      axios
        .get("https://medicalstore.mashupstack.com/api/medicine/"+postId, {
          headers: { Authorization: "Bearer " + user.token },
        })
        .then((response) => {
          setPost(response.data);
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
        });
    }
  }, [postId, user.token]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h1>{post.name}</h1>
              </div>
              <div className="card-body">
                {post.company}
              </div>
              <div className="card-footer">
                {post.expiry_date}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default checkAuth(Views);
