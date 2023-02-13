import { useState } from "react";
import { Container, FormGroup, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { doLogin } from "../auth";
import logo1 from "./images/logo1.png";
import axios from "axios";
import { loginUser } from "../services/user-service";
import { Toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Router } from "react-router-dom";

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
      toast.error("Username or Password is Required!");
      return;
    }

    loginUser(loginDetails)
      .then((jwtTokenData) => {
        console.log("user login");
        console.log(jwtTokenData);
      })
      .catch((error) => {
        console.log(error);
      });

    // try {
    //     const response = await axios.post('http://localhost:8080/api/items');
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error(error);
    //   }

    // doLogin =
    //     (data,
    //         () => {
    //             console.log("login detail is saved successfully in local storage");
    //         });
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

          <Form className="logininputcontainer" onSubmit={handleFormSubmit}>
            <FormGroup className="form">
              <input
                type="email"
                id="emaillogin"
                value={loginDetails.username}
                onChange={(e) => handleChange(e, "username")}
              />
              <label className="loginformlabel" for="email">Enter email</label>
            </FormGroup>

            <FormGroup className="form">
              <input
                type="password"
                id="passwordlogin"
                value={loginDetails.password}
                onChange={(e) => handleChange(e, "password")}
              />
              <label className="loginformlabel" for="password">Enter password</label>
            </FormGroup>
            <button className="loginbutton">login</button>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default Login;
