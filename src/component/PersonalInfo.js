import { useState, useEffect, useRef } from "react";


function PersonalInfo({ formData, setFormData }) {
  const [image, setImage] = useState("");
  const imageupload = useRef(null);
  function handleImage(e) {
    setImage(e.target.files[0]);
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

  return (
    <div className="personal-info-container">
      {preview ? (
        <img
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
          {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-plus" /> */}
         + Upload
        </button>
      )}
      <input hidden type="file" onChange={handleImage} ref={imageupload} />
      <br />
      <formgroup className="form">
        <input
          type="text"
          placeholder=""
          classname="textbox"
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
        placeholder=""
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
        />
          <label className="formlabel">last Name</label>
        </formgroup>
      <br />
<forngroup className="form">

      <input
        type="email"
        placeholder=""
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
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
        />
          <label className="formlabel">Password</label>
        </formgroup>
      <br />
    </div>
  );
}

export default PersonalInfo;
