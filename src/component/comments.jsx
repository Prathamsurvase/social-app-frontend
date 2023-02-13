import { useEffect } from "react";
import { useState } from "react";
import Kunal from "./images/kunal.jpg";
import "./comment.css";

function App() {
  const getLocalItems = () => {
    let list = localStorage.getItem("list");

    if (list) {
      return JSON.parse(localStorage.getItem("list"));
    } else {
      return [];
    }
  };

  const [comment, setComment] = useState({
    content: "",
  });
  const [comments, setComments] = useState(getLocalItems());

  const resetform = () => {
    setComment({
      content: "",
    });
  };

  const onClickHandler = (e) => {
    if (comment.content !== "") {
      setComments((comments) => [...comments, comment]);

      resetform();
    } else {
      alert("comment is blank");
    }
  };

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(comments));
  }, [comments]);

  return (
    <div className="main-container">
      <div>{/* {comments.content} */}</div>

      <div className="comment-flexbox">
        {/* <h3 className="comment-text">Comment</h3> */}
        <div className="commentwrite">


        <img className="commentuserprofile" src={Kunal} alt="profile" />
        <input
        placeholder="Write Comment"
          type="text"
          value={comment.content}
          onChange={onChangeHandler}
          className="input-box"
          />
        <button onClick={onClickHandler} className="comment-button" >
          Send
        </button>
          </div>

        <div className="comments" id="comments1">
          {comments.map((text) => (
            <div className="comment-container">
              <container>
                <img className="commentuserprofile" src={Kunal} alt="profile" />

                <div className="commentcontext">
                  <span>Kunal Mishra</span>
                  <p> {text}</p>
                </div>
              </container>
              <span className="commenttime">1 hour ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
