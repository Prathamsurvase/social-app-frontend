import React from "react";
import Addpost from "./createpostform";
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from "./NavbarComp";

const Create = () => {
  return (
    <>
    <div style={{width: "100%"}}>
      <NavScrollExample/>
      <div style={{height: "30px"}}/>
      <Addpost />
    </div>
    </>
  );
};

export default Create;
