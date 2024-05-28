import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import PostListItem from "./PostListItem";
import { useSelector } from "react-redux";

/*document.body.style.backgroundColor = "Teal";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";*/

function Listposts() {
  const user = useSelector((store) => store.auth.user);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchPost, setSearchPost] = useState("");

  
  const featchpost = useCallback(() => {
    if (user) {
      axios
        .get("https://medicalstore.mashupstack.com/api/medicine", {
          headers: { Authorization: "Bearer " + user.token },
        })
        .then((response) => {
          setPosts(response.data);
          setFilteredPosts(response.data);
        })
        .catch((error) => {
          console.error("Failed to fetch posts:", error);
        });
    }
  }, [user]); 

  useEffect(() => {
    featchpost(); 
  }, [featchpost]); 


  function search(event) {
    setSearchPost(event.target.value);
  }
  
  const searchClick = (event) => {
    event.preventDefault();
    if (searchPost.trim() === "") {
      setFilteredPosts(posts);
    } else {
      const filteredItems = posts.filter((item) =>
        item.name?.toLowerCase().includes(searchPost.toLowerCase())
      );
      setFilteredPosts(filteredItems);
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-12 border rounded p-3 bg-light" style={{ borderRadius: "15px", boxShadow: "0 0 10px rgb(0, 0, 0)" }}>
            <form className="form-inline justify-content-center mb-4">
              <div className="form-group mx-sm-3 mb-2">
                <input
                  type="text"
                  className="form-control"
                  value={searchPost}
                  onChange={search}
                  placeholder="Search..."
                />
                <button className="btn btn-primary btn-small" onClick={searchClick}>
                  Search
                </button>
              </div>
            </form>
            <h1 className="text-center my-4">medicine</h1>
          </div>
        </div>&nbsp;
        <div className="row">
          <div className="col-md-12 border rounded p-3 bg-light" style={{ borderRadius: "15px", boxShadow: "0 0 10px rgb(0, 0, 0)" }}>
            <div className="text-center">
              <Link to="/blog/posts" className="btn btn-primary mb-2 mr-2">
                Create Post
              </Link>
            </div>
            {filteredPosts.length === 0 ? (
              <h3 className="text-md-center">No matching posts found.</h3>
            ) : (
              filteredPosts.map((post) => <PostListItem key={post.id} post={post} refresh={featchpost} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listposts;

