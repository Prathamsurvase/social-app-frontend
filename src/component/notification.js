import React from "react";
import { FiBell } from "react-icons/fi";
import "./notification.css";
import NavScrollExample from "./NavbarComp";


function Notification() {
  return (
    <div style={{ width: "100%", margin:"0px" }}>
      
      <NavScrollExample />
      <div style={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center", marginTop:"100px"}}>
        <div id="notificationicon">
          <FiBell />
        </div>
        <div id="notificationtext">
          <p>No Notification Yet</p>
        </div>
      </div>
    </div>
  );
}

export default Notification;
