import React from "react";
// import { Routes, Route} from "react-router-dom";
import Form from "./component/form";
import "./component/formstyle.css";
// import Signup from "./component/signup.js";
// import Signup2 from "./component/signup2.js";
// import Nextsignup from "./component/nextsignup";

function App() {
  return (
    <>
      <div className="App">
        <div className="leftside">
          
          <h1>social app</h1>
        </div>
        


        <div className="rightside">
          <h1 className="setup">Profile Setup!</h1>
          <p>Welcome! Please enter Your Details.</p>
          <Form />
        </div>
      </div>
    </>

    // <div className="App">
    //   <div className="leftside">
    //     <h1>social app</h1>
    // //   </div>
    // //   <div>
    // //     <Signup />
    // //   </div>

    // //    <Routes>
    // //     <Route path = "/signup" element={<Signup/>}/>
    // //     <Route path= "/signup2" element={<Signup2/>}/>
    // //    </Routes>

    // // </div>
  );
}

export default App;
