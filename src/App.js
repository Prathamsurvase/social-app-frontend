import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Form from "./component/form";
import Login from "./component/login";
import Create from "./component/create";
import Post from "./component/feed-post";
import "./component/formstyle.css";


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

          </Routes>
        </BrowserRouter>
    </div>
    </>
  );
}

export default App;
