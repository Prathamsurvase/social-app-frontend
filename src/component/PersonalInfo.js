import { useState, useEffect, useRef } from "react";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom"


function PersonalInfo({ formData, setFormData, setProfileImage }) {
  const [image, setImage] = useState("");
  const imageupload = useRef(null);
  
  function handleImage(e) {
    setImage(e.target.files[0]);
    setProfileImage(e.target.files[0])
    console.log(e.target.files);
  }
  const [preview, setPreview] = useState();
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

const navigate= useNavigate();

  const goToLogin=()=>{
    console.log(window.location)
    window.location.pathname = "/login"
  }

  return (
    <>
        <div className="personal-info-container">
          {preview ? (
            <img className="profileimg"
              src={preview}
              alt="preview"
              onClick={() => {
                setImage(null);
              }}
            />
          ) : (
            <button
              className="profilebutton"
              onClick={() => {
                imageupload.current.click();
              }}
            >
              <div className="profileicon">

             <FaUserAlt/>
              </div>
            </button>
          )}
          <input hidden type="file" onChange={handleImage} ref={imageupload} />
          <br />
          <formgroup className="form">
            <input
              type="text"
              placeholder=""
              className="textbox"
              value={formData.firstName}
              onChange={(e) => {
                setFormData({ ...formData, firstName: e.target.value });
              }}
            />
            <label className="formlabel">First Name</label>
          </formgroup>
          <br />
          <formgroup className="form">
            <input
              type="text"
              className="textbox"
              placeholder=""
              value={formData.lastName}
              onChange={(e) => {
                setFormData({ ...formData, lastName: e.target.value });
              }}
            />
            <label className="formlabel">Last Name</label>
          </formgroup>
          <br />
          <forngroup className="form">
            <input
              type="email"
              placeholder=""
              className="textbox"
              value={formData.email}
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
            />
            <label className="formlabel">Email</label>
          </forngroup>
          <br />
          <formgroup className="form">
            <input
              type="password"
              placeholder=""
              className="textbox"
              value={formData.password}
              onChange={(event) =>
                setFormData({ ...formData, password: event.target.value })
              }
            />
            <label className="formlabel">Password</label>
          </formgroup>
          <br />
          <p id="alreadyaccount">
              Already Have an account? <a style={{color: "#afd1ea", cursor: "pointer"}} className="sign_up_link" onClick={()=> goToLogin()}>Sign In</a>
              {/* <span className="signin">Sign In</span> */}
            </p>
        </div>
    </>
  );
}

export default PersonalInfo;
