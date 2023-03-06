import React, { useEffect, useState } from "react";
import Userprofilebg from "./images/parul.jpg";
import Userprofilepic from "./images/kunal.jpg"
import { getUser } from "../services/user-service";
import "./userprofile.css";
import { useParams } from "react-router-dom";
import NavScrollExample from "./NavbarComp";

function Userprofile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser(userId).then((data) => {
      console.log(data);
      setUser({ ...data });
    });
  }, []);

  const userDetails = JSON.parse(localStorage.getItem("data"))
  console.log("userDetails", userDetails)
  return (
    <>
      <div style={{width:"100%"}}>
        <div style={{width:"100%", position:"fixed"}}>
          <NavScrollExample />
        </div>

        <div id="userprofilefeed">
          <div className="userheader" style={{ margin: "auto" }}>
            <div style={{textAlign:"center"}}>
              <img id="userbg" src={Userprofilebg} />
            </div>
            <div>
              <img id="userprofilepic" src={`data:image/png;base64,${userDetails?.user?.profileImage}`} alt="" />
            </div>
            <div id="username">
              <h4>{userDetails.user.firstName} {userDetails.user.lastName }</h4>
              <p>hey Friends</p>
            </div>
          </div>
          <div id="middle">
            <div id="bio" style={{ margin: "auto", marginTop: "10px" }}>
              <h4>Bio:</h4>
              <p>
                 {
                 userDetails.user.about
                 }
              </p>
            </div>
            <hr />
            <div id="informationcontainer">
              <h3 style={{ textAlign: "center", marginBottom: "30px" }}>
                Information
              </h3>
              <div style={{ display: "flex", gap: "150px" }}>
                <div id="contactinfo">
                  <div id="emailinfo" style={{ display: "flex", gap: "20px", justifyContent: "center", alignItems: "center" }}>
                    <h6 style={{ margin: "0px" }}>Email</h6>
                    <p style={{ margin: "0px" }}>{userDetails.user.email}</p>
                  </div>
                  <div id="numberinfo" style={{ display: "flex", gap: "20px" }}>
                    <h6 style={{ margin: "0px" }}>Phone Number</h6>
                    <p style={{ margin: "0px" }}>{userDetails?.user?.phoneNumber}</p>
                  </div>
                </div>
                <div id="personalinfo">
                  <div
                    id="occupationinfo"
                    style={{ display: "flex", gap: "20px" }}
                  >
                    <h6 style={{ margin: "0px" }}>Occupation</h6>
                    <p style={{ margin: "0px" }}>{userDetails.user.occupation}</p>
                  </div>
                  <div
                    id="nationalityinfi"
                    style={{
                      display: "flex",
                      gap: "20px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h6 style={{ margin: "0px" }}>Nationality</h6>
                    <p style={{ margin: "0px" }}>Indian</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userprofile;
