import { FaUserAlt } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaPlusSquare } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate, useNavigation } from "react-router-dom";
import "./rightbar.css"


function Rightbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("data")).user 

  console.log("USER", user)

  return (
    <div className="rightbar">
      <div className="leftinfo">
        <div className="leftprofile">
          <FaUserAlt />
        </div>
        <div className="handle">
          <div className="username">{user?.firstName} {user?.lastName}</div>
          <p>
          {user?.occupation}, {user?.about}
          </p>
        </div>
      </div>
      <div className="reach">
        <div className="following">
          <span>following</span>
          <p>0</p>
        </div>
        <div className="followers">
          <span>followers</span>
          <p>0</p>
        </div>
      </div>
      <hr />
      <div className="more">
        <div className="request" style={{ marginBottom: 10 }}>
          <FaUserAlt />
          <a href="">Requests</a>
        </div>
        <div className="create" style={{ marginBottom: 10 }}>
          <FaPlusSquare />
          <a 
          style={{cursor: "pointer"}}
          onClick= {()=> {
            navigate("/create")
          }}
          >Create</a>
        </div>
        <div className="events" style={{ marginBottom: 10 }}>
          <FaCalendarCheck />
          <a href="">Events</a>
        </div>
        <div className="community">
          <FaUserFriends />
          <a href="">Community</a>
        </div>
      </div>

      <div className="moreitem">
        <div className="setting" style={{ marginBottom: 10 }}>
          <FaRegSun />
          <a href="">Setting</a>
        </div>
        <div className="report" style={{ marginBottom: 10 }}>
          <FaExclamationCircle />
          <a href="">Report</a>
        </div>
        <div className="helpsupport" style={{ marginBottom: 10 }}>
          <FaHeadset />
          <a href="">Help and Support</a>
        </div>
        <div className="logout" onClick={()=> {
          localStorage.removeItem("TOKEN_VALUE");
          navigate("/login")

        }}>
          <FaSignOutAlt />
          <a >Logout</a>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
