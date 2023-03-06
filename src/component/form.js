import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./otherInfo";
import logo1 from "./images/logo1.png";
import "./formstyle.css";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { signUp } from "../services/user-service";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    DOB: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    occupation: "",
    nationality: "",
    other: "",
  });
  const [profileImage, setProfileImage] = useState();

  const FormTitles = ["Profile Setup", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo formData={formData} setFormData={setFormData} setProfileImage={setProfileImage}/>;
    } else if (page === 1) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };
  const submitform = (event) => {
    console.log(formData);
    // alert("CHANDAN")
    var forData = new FormData();
                forData.append("email", formData.email);
                forData.append("password", formData.password);
                forData.append("DOB", formData.DOB);
                forData.append("firstName", formData.firstName);
                forData.append("lastName", formData.lastName);
                forData.append("phoneNumber", formData.phoneNumber);
                forData.append("occupation", formData.occupation);
                forData.append("nationality", formData.nationality);
                forData.append("about", formData.other);
                forData.append("image", profileImage);

    signUp(forData)
      .then((res) => {
        console.log(res);
        console.log("done");
        window.location.pathname = "/login";
      })
      .catch((error) => {
        console.log(error);
        console.log("error");
      });
  };

  return (
    <>
      <div className="leftside">
        <img className="logo" src={logo1} alt="logo" />
        <div className="slant"></div>
      </div>

      <div className="rightside">
        <div className="form">
          <div className="signupheader">
            <h1>{FormTitles[page]}</h1>
            <p>Welcome! To the Club</p>
          </div>
          <div className="body">{PageDisplay()}</div>
          <h1></h1>
          <div className="signupfooter">
            <button
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
              style={{
                marginRight: "20px",
              }}
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={() => {
                submitform();
                
                if (page === FormTitles.length - 1) {
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? (
                <FaCheck />
              ) : (
                <FaChevronRight />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
