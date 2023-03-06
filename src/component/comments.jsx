import { useEffect } from "react";
import { useState } from "react";
import Kunal from "./images/kunal.jpg";
import "./comment.css";
var axios = require('axios');


function App({postID}) {
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

  const [commentDetails, setCommentDetails] = useState({
    loading: true,
    success : false,
    data: []

  });

  const [setter, setSetter] = useState(false);

  const resetform = () => {
    setComment({
      content: "",
    });
  };
  const userDetails = JSON.parse(localStorage.getItem("data"))

  console.log("CHAMAN", userDetails.user.profileImage)

  const onClickHandler = (e) => {

    console.log()

    var data = JSON.stringify({
      "commentContent": comment,
    });
    
    var config = {
      method: 'post',
    maxBodyLength: Infinity,
      url: `http://localhost:9090/api/posts/${postID}/user/${userDetails?.user?.id}/comment`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setSetter(!setter)

    })
    .catch(function (error) {
      console.log(error);
    });
    
  };

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(comments));
  }, [comments]);

  useEffect(() => {
    var config = {
      method: 'get',
    maxBodyLength: Infinity,
      url: `http://localhost:9090/api/posts/${postID}/comments`,
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      setCommentDetails({ success: true, loading: false, data: response.data});
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }, [setter]);

  function timeAgo(date) {
    const newdate = new Date(date)

    const hour = newdate.getUTCHours();
    const min = newdate.getUTCMinutes();

    return `${hour}:${min}`
  }
  

  return (
    <div className="main-container">
      <div>{/* {comments.content} */}</div>

      <div className="comment-flexbox">
        {/* <h3 className="comment-text">Comment</h3> */}
        <div className="commentwrite">


        <img className="commentuserprofile" src={`data:image/png;base64,${userDetails.user.profileImage}`} alt="profile" />
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
          {commentDetails?.data.map((comment) => (
            <div className="comment-container">
              <container>
                <img className="commentuserprofile" src={`data:image/png;base64,${comment?.commenter?.profileImage}`} alt="profile" />

                <div className="commentcontext">
                  <span>{comment?.commenter?.firstName} {comment?.commenter?.lastName}</span>
                  <p> {comment?.commentContent}</p>
                </div>
              </container>
              <span className="commenttime">{timeAgo(comment?.date)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
