import React from "react";


function SignUpInfo({ formData, setFormData }) {
  return (

    
<>
    
          <div>
    
    <formgroup className="form">
      <input
        type="date"
        placeholder=""
        className="textbox"
        value={formData.DOB}
        onChange={(event) =>
          setFormData({ ...formData, DOB: event.target.value })
        }
        />
        <label className="formlabel"></label><br/ >

        </formgroup>
        <formgroup className="form">
            
      <input
        type="text"
        placeholder=""
        className="textbox"
        value={formData.phoneNumber}
        onChange={(e) => {
          setFormData({ ...formData, phoneNumber: e.target.value });
        }}
        />
          <label className="formlabel">Phone Number
          </label>
        </formgroup>
        <br/>

    <formgroup className="form">

      <input
        type="text"
        placeholder=""
        className="textbox"
        value={formData.occupation}
        onChange={(e) => {
            setFormData({ ...formData, occupation: e.target.value });
          }}
        />
          <label className="formlabel">Occupation</label>
        </formgroup>
   
        <br/>
        <formgroup className="form">

      <input
        type="text"
        placeholder=""
        className="textbox"
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
        />
          <label className="formlabel">Nationality</label>
        </formgroup>
      <br/> 
    </div>
        </>
  );
}

export default SignUpInfo;