import React from 'react';
import "./about.css";
import Logo from "./logo.png";
import Feed from "./images/feed.png";
import Create from "./images/create.png";
import Login from "./images/LogIn.png";
import NavScrollExample from './NavbarComp';

function Aboutus() {
  return (
    <div style={{width:"100%", backgroundColor:"white"}}>
      <NavScrollExample/>

  
    

    {/* <link rel="stylesheet" href="About.css"/> */}

   

    <section className="about" style={{height: "auto", marginTop:"30px"}}>

        <div className="content">
            <img src={Logo} alt=""/>
            <div className="text">
                <h1>ABOUT</h1>
                <p>It is a unique blend of e-learning and social media, providing users with a one-stop platform for
                    education and
                    communication. <br/>

                    The platform combines features of traditional e-learning platforms, such as online courses, and
                    tutorials, with those of
                    social media sites, like user profiles, networks, and community features. This integration allows
                    users to easily
                    connect and engage with peers and instructors, share knowledge, and learn from each other within a
                    user-friendly
                    platform.<br/><br/>
                    Whether someone is looking to advance their education or connect with others in their field, this
                    platform is designed
                    to meet their needs and provide a comprehensive, enjoyable, and social experience.
                </p>
            </div>

        </div>

    </section>
    <section className="about">

        <div className="content">

            <div className="text">
                <h1>LOG IN / SIGN UP</h1>
                <p>This is the landing page.
                    It displays the logo of THE SOCIAL APP.
                     
                    It allows user to register themselves to be able to explore various of its features.

                </p>
            </div>
            <img src={Login} alt=""/>

        </div>

    </section>

    <section className="about">

        <div className="content">
            <img src={Feed} alt=""/>
            <div className="text">
                <h1>FEED</h1>
                <p>This is the page where all the features are combined to make the user experience seamless and fun.

                    Registered user can search, post, explore the topic of their interest.</p>

            </div>

        </div>

    </section>


    <section className="about" style={{height: "100vh"}}>

        <div className="content">

            <div className="text">
                <h1>POST</h1>
                <p>To create post through title ,caption, images and assign
                    the post to the category.

                    Make use of the rich text editor.


                </p>
            </div>
            <img src={Create} alt=""/>

        </div>

    </section>


      
    </div>
  )
}

export default Aboutus;
