import React, { useState } from "react";
import Comments from "./comments";
import { MdMoreVert } from "react-icons/md";
import Userprofile from "./images/ramanprofile.jpg";
import Mlpost from "./images/mlpost.png";
import "./feed-post.css";
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { BiComment } from "react-icons/bi";
import { BiSend } from "react-icons/bi";
import { Scrollbar } from "react-scrollbars-custom";

const Post = () => {
  const [like, setLike] = useState(false);
  const [likescount, setLikesCount] = useState("");
  const [likesshow, setLikesShow] = useState();

  const [commentopen, setCommentOpen] = useState(false);

  //handle likes
  const handlelikes = () => {
    if (!like) {
      setLike(true);
      setLikesCount(likescount + 1);
      setLikesShow("likes");
    } else {
      setLike(false);
      setLikesCount(likescount - 1);
      setLikesShow("likes");
    }
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userinfo">
            <img className="userpostprofile" src={Userprofile} />
            <div className="userdetails">
              <a
                href=""
                className="username"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Raman Kumar Singh
              </a>
              <span className="time">1 min ago</span>
            </div>
          </div>
          <MdMoreVert />
        </div>
        <div className="content">
          <p>
            The third seminar will be at 09.00.
            <br />
            MBG (Eng) Departmental Seminar "Machine Learning: a promising
            approach for managing the bioconversion of waste to biofuel and
            bioenergy"
            <br />
            🗓:30 January 2023 &nbsp; ⏰️:09:00
            <br />
            Zoom link: https://lnkd.in/dEXUveSc
            <br />
            Raman Singh: 948 4797 9883
          </p>
          <img className="postpic" src={Mlpost} onDoubleClick={handlelikes} />
        </div>

        <div className="footer">
          <div className="item" id="likeitem">
            {like ? (
              <FcLike onClick={handlelikes} style={{ cursor: "pointer" }} />
            ) : (
              <FaRegHeart onClick={handlelikes} style={{ cursor: "pointer" }} />
            )}
            <br />
            <span>{likescount}</span>
            <span>{likesshow}</span>
          </div>

          <div className="item" onClick={() => setCommentOpen(!commentopen)}>
            <BiComment />
          </div>

          <div className="item">
            <BiSend />
          </div>
        </div>

        <div className="commentsection" >
          {commentopen && <Comments />}
        </div>
      </div>
    </div>
  );
};
export default Post;
