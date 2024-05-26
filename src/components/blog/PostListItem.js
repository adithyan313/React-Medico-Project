import axios from "axios";
import { Link } from "react-router-dom";
import checkAuth from "../auth/checkAuth";
import { useSelector } from "react-redux";
import { useState } from "react";

function PostListItem(props) {
  const user = useSelector((store) => store.auth.user);
  const [responseMessage, setResponseMessage] = useState('');

  function deletePost() {
    axios
      .delete(`https://medicalstore.mashupstack.com/api/medicine/${props.post.id}`, {
        headers: { Authorization: "Bearer " + user.token },
      })
      .then((response) => {
        setResponseMessage(response.data.message);
        props.refresh();
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
        setResponseMessage("Failed to delete post.");
      });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body" style={{ backgroundColor: "PaleTurquoise" }}>
              {props.post.name}
              <button className="btn btn-danger float-right" onClick={deletePost}>
                Delete
              </button>
              <Link to={`/postedit/${props.post.id}`} className="btn btn-primary float-right">
                Edit
              </Link>
              <Link to={`/views/${props.post.id}`} className="btn btn-info float-right">
                View
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal to display response messages */}
      <div className="modal fade" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Delete Item</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              {responseMessage}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default checkAuth(PostListItem);
