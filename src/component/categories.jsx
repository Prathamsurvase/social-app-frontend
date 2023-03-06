import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Loadcategorywise } from "../services/post-service";
import "./categories.css";
// import Post from './feed-post';
import Categoriesmenu from "./categoriesmenu";
import Post from "./feed-post";
import NavScrollExample from "./NavbarComp";
import Rightbar from "./rightbar";

function Categories() {
  const [posts, setPosts] = useState([]);
  const { categoryId } = useParams();
  console.log(categoryId);

  useEffect(() => {
    console.log(categoryId);

    Loadcategorywise(categoryId)
      .then((data) => {
        setPosts([...data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <div style={{ position: "fixed", width: "100%" }}>
        <NavScrollExample />
      </div>

      <div className="categoryfeed">
        <div style={{ position: "fixed", marginTop: "100px" }}>
          <Categoriesmenu />
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "120px",
          }}
        >
          <div
            className="category-feed-container"
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {posts &&
              posts.map((post, index) => {
                console.log("PRATHAM", post);
                return <Post postData={post} key={index} />;
              })}
          </div>
        </div>

        <div>
          <Rightbar />
        </div>
      </div>
    </div>
  );
}

export default Categories;
