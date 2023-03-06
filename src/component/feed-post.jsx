import React, { useState } from "react";
import Comments from "./comments";
import { MdMoreVert } from "react-icons/md";
import Userprofile from "./images/ramanprofile.jpg";
import Mlpost from "./images/mlpost.png";
import { Modal, ModalHeader } from "reactstrap";
import "./feed-post.css";
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { BiComment } from "react-icons/bi";
import { BiSend } from "react-icons/bi";
// import { Scrollbar } from "react-scrollbars-custom";
// import NavScrollExample from "./NavbarComp";
import parse from 'html-react-parser';
import Base64ToImage from "./Base64ToImage";
var axios = require('axios');


const Post = ({
  postData
}) => {
  const [like, setLike] = useState(false);
  const [likescount, setLikesCount] = useState("");
  const [likesshow, setLikesShow] = useState();

  const [commentopen, setCommentOpen] = useState(false);

  const [modal, setModal] = useState(false)

  const userDetails = JSON.parse(localStorage.getItem("data"))

  const handleBookmark = (id) => {
    var config = {
      method: 'post',
    maxBodyLength: Infinity,
      url: `http://localhost:9090/api/bookmarks/user/${userDetails.user.id}/post/${id}`,
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
  } 

  const [commentDetails, setCommentDetails] = useState({
    loading: false,
    success : true,
    data: []

  });



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

  function timeAgo(date) {
    const newdate = new Date(date)

    const hour = newdate.getUTCHours();
    const min = newdate.getUTCMinutes();

    return `${hour}:${min}`
  }
  

  return (
    <>
    
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userinfo">
            <img className="userpostprofile" 
            src={`data:image/png;base64,${postData?.user?.profileImage}`} />
            <div className="userdetails">
              <a
                href=""
                className="username"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {postData?.user?.firstName} {postData?.user?.lastName}
              </a>
              <span className="time">Posted at {timeAgo(postData?.addedDate)}</span>
            </div>
          </div>
          <Modal
          size="lg"
          style={{
            marginTop: "100px"
          }}
            isOpen={modal}
            toggle ={()=>setModal(!modal)}
            >
            <ModalHeader
            toggle ={()=>setModal(!modal)}
            >
              {
                <>
                <h2>{postData?.title}</h2>
                <>{parse(postData?.content)}</>
                </>
              }
            </ModalHeader>
          </Modal>
          <button style={{backgroundColor:"white", color:"black"}}  onClick={()=> setModal(true)}> <MdMoreVert /></button>
        </div>
        <div className="content" >
          <h4>{
            postData?.title
          }</h4>
          {
            //  parse(postData?.content)
            postData?.caption
          }
          {/* <p>
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
          </p> */}

          {
            postData?.imageName !== null && <img className="postpic" src={`data:image/png;base64,${postData?.postImage}`} onDoubleClick={handlelikes} />
          }
          

          {/* <Base64ToImage base64String ={postData?.postImage}/> */}
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

          <div className="item" onClick={() => handleBookmark(postData?.postId)}>
            <BiSend />
          </div>
        </div>

        <div className="commentsection" >
          {commentopen && <Comments postID={postData?.postId}/>}
        </div>
      </div>
    </div>
    </>
  );
};
export default Post;
