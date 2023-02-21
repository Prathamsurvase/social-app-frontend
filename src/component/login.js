import { useState } from "react";
import { Container, FormGroup, Form } from "react-bootstrap";
import { doLogin } from "../auth";
import logo1 from "./images/logo1.png";
import axios from "axios";
import { loginUser } from "../services/user-service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import { Router } from "react-router-dom";
// import "./formstyle.css";

const Login = () => {
  const [loginDetails, setloginDetails] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;

    setloginDetails({
      ...loginDetails,
      [field]: actualValue,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(loginDetails);

    if (
      loginDetails.username.trim() == "" ||
      loginDetails.password.trim() == ""
    ) {
      alert("please enter details");

      toast.error("Username or Password is Required!");
      return;
    }

    //Submit the data to the server to generate Token:

    loginUser(loginDetails)
      .then((data) => {
        console.log("user login");
        console.log(data);

        doLogin(data, () => {
          console.log("login detail is saved successfully in local storage");
        });  
      })
      .catch((error) => {
        console.log(error);
        //toastify apply karna hai yaha.

        if (error.response.status == 400 || error.response.status == 404) {
          alert(error.response.data.message);
        } else {
          alert("Something Went Wrong on Server!!");
        }
      });


    

    //Save data to Local Storage:
    
                                                                         
  };
  return (
    <>
      <div className="leftside">
        <img className="logo" src={logo1} alt="logo" />
        <div className="slant"></div>
      </div>
      <div className="rightside">
        <Container className="logincontainer">
          <h1>Login Here!</h1>
          <p>Welcome Back!</p>

          <Form className="logininputcontainer" onSubmit={handleFormSubmit}
          style={{
            display: "flex",
            gap: "20px",
            flexDirection: "column",
            // alignItems: "center"
          }}
          >
            <FormGroup className="form">
              <div>
              <input
                type="email"
                id="emaillogin"
                value={loginDetails.username}
                onChange={(e) => handleChange(e, "username")}
              />
              <label className="loginformlabel" for="email">
                Enter email
              </label>
              </div>
              
            </FormGroup>

            <FormGroup className="form">
              <div>
              <input
                type="password"
                id="passwordlogin"
                value={loginDetails.password}
                onChange={(e) => handleChange(e, "password")}
              />
              <label className="loginformlabel" for="password">
                Enter password
              </label>
              </div>
              <button className="loginbutton" style={{marginTop: "20px"}}>login</button>
            </FormGroup>
            
          </Form>
        </Container>
      </div>
    </>
  );
};

export default Login;
