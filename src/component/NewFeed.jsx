import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { loadAllPosts } from "../services/post-service";
import Post from "./feed-post";
import NavScrollExample from "./NavbarComp";
import Rightbar from "./rightbar";

function NewFeed() {
  const [postContent, setPostContent] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //load all posts from server

    loadAllPosts()
      .then((data) => {
        // console.log(data);
        setPostContent(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (postContent !== null) {
      setLoading(false);
    }
  }, [postContent]);

  return (
    <>
      <div className="navbar" style={{ width: "100%", position: "fixed"}}>
        <NavScrollExample />
      </div>
      <div style={{ width: "100%", paddingTop: "120px" , display:"flex", flexDirection:"column"}}>
        {loading === true ? (
          <a>Loading</a>
        ) : (
          <>
            {postContent.map((data) => {
              return <Post postData={data} />;
            })}
          </>
        )}
      </div>
        
        <div>
        <h1>Hiii</h1>
        <Rightbar/>

        </div>
            
    </>
  );
}

export default NewFeed;
