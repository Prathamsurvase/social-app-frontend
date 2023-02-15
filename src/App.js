import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./component/formstyle.css";
import Form from "./component/form";
import Login from "./component/login";
import Create from "./component/create";
import Post from "./component/feed-post";


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
