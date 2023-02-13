import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./otherInfo";
import logo1 from "./images/logo1.png";
import "./formstyle.css";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";


function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    DOB: "",
    firstName: "",
    lastName: "",
    phonenumber: "",
    occupation: "",
    nationality: "",
    other: "",
  });

  const FormTitles = ["Profile Setup", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };
  const submitform = async (e) => {
    e.preventDefault();
    //   try {
    //     const response = await axios.get("http://localhost:8080/api/items");
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    //  await axios.post("http://localhost:9090/api/user/register", formData).then((response) => {
    //   console.log(response)
    //   console.log("success")
    //  });

    // signUp(formData).then((resp)=>{
    //   console.log(resp);
    //   console.log("success log");
    // }).catch((error)=>{
    //   console.log(error)
    //   console.log("error")
    // })
  };

  return (
    <>
      <div className="leftside">
        <img className="logo" src={logo1} alt="logo" />
        <div className="slant"></div>
      </div>

      <div className="rightside">
        
        <div className="form" onSubmit={submitform}>
          <div className="header">
            <h1>{FormTitles[page]}</h1>
            <p>Welcome! To the Club</p>
          </div>
          <div className="body">{PageDisplay()}</div>
          <h1></h1>
          <div className="footer">
            <button
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
             <FaChevronLeft/>
            </button>
           
            <button
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("FORM SUBMITTED");
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? <FaCheck/> : <FaChevronRight/>}
            </button>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
