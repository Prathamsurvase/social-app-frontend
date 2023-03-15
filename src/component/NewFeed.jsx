import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { loadAllPosts } from "../services/post-service";
import Post from "./feed-post";
import NavScrollExample from "./NavbarComp";
import Rightbar from "./rightbar";
import Spinner from 'react-bootstrap/Spinner';
import Categoriesmenu from "./categoriesmenu";
var axios = require('axios');

function NewFeed() {
  const [postContent, setPostContent] = useState(null);

  const [loading, setLoading] = useState(true);

  const [random, setRandom] = useState(false );

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
  }, [random]);

  useEffect(() => {
    if (postContent !== null) {
      setLoading(false);
    }
  }, [postContent]);

  const onSearchValueChange =(e) => {

    if (e.target.value !== ""){
      var config = {
        method: 'get',
      maxBodyLength: Infinity,
        url: `http://localhost:9090/api/posts/search/${e.target.value}`,
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        setPostContent(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    } else {
      setRandom(!random)
    }

    

    console.log("CHANDANISAWESOME", e.target.value)
    
  }

  return (
    <>
      <div className="navbar" style={{ width: "100%", position: "fixed"}}>
        <NavScrollExample onSearchValueChange={onSearchValueChange}/>
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
