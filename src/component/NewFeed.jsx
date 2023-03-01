import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { loadAllPosts } from "../services/post-service";
import Post from "./feed-post";
import NavScrollExample from "./NavbarComp";
import Rightbar from "./rightbar";
import Spinner from 'react-bootstrap/Spinner';
import Categoriesmenu from "./categoriesmenu";

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
      <div className="main-feed-container">
        {loading === true ? (
          <Spinner animation="grow" />
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
        <div
          style={{
            position: "fixed",
            top: "100px",
            left: "10px",
            
          }}
        >
        <Categoriesmenu/>

        </div>

        </div>
            
    </>
  );
}

export default NewFeed;
