import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./component/formstyle.css";
import Form from "./component/form";
import Login from "./component/login";
import Create from "./component/create";
import Post from "./component/feed-post";
import NewFeed from "./component/NewFeed";
import NavScrollExample from "./component/NavbarComp";
import Categoriesmenu from "./component/categoriesmenu";
import Categories from "./component/categories";
import Userprofile from "./component/userprofile";
import BookMark from "./component/BookMark";



function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login/>} />
            <Route path="signup" element={<Form/>} />
            <Route path="create" element={<Create/>} />
            <Route path="/" element={<Post/>} />
            <Route path="feed" element={<NewFeed/>} />
            <Route path="navbar" element={<NavScrollExample/>} />
            <Route path="categories" element={<Categoriesmenu/>} />
            <Route path="userprofile" element={<Userprofile/>} />
            <Route path="categories/:categoryId" element={<Categories/>} />
            <Route path="bookmark" element={<BookMark/>} />
            

          </Routes>
        </BrowserRouter>
    </div>
    </>
  );
}

export default App;
