import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
        
      <formgroup className="form" id="bio">

      <input
        type="text"
        placeholder=""
        value={formData.other}
        onChange={(e) => {
            setFormData({ ...formData, other: e.target.value });
        }}
        />
          <label className="formlabel" id="biolabel">Bio</label>
        </formgroup>
    </div>
  );
}

export default OtherInfo;