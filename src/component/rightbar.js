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
import { Link } from "react-router-dom";


function Rightbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("data")).user 

  console.log("USER", user)

  return (
    <div className="rightbar">
      <div className="leftinfo">
        <img className="leftprofile" 

        src={`data:image/png;base64,${user?.profileImage}`}
        >

          {/* <FaUserAlt /> */}
        </img>
        <div className="handle">
          <div className="username"  tag={Link} to="/userprofile">
            <a onClick={()=>navigate("/userprofile") }style={{cursor:"pointer", textDecoration:"none"}}>{user?.firstName} {user?.lastName}</a></div>
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
        <div className="request" style={{ marginBottom: 10, display:"flex",gap:12 }}>
          <div className="icon"><FaUserAlt/></div>
          <a href="">Requests</a>
        </div>
        <div className="create" style={{ marginBottom: 10, display:"flex",gap:12}}>
          <div className="icon"><FaPlusSquare /></div>
          <a 
          style={{cursor: "pointer"}}
          onClick= {()=> {
            navigate("/create")
          }}
          >Create</a>
        </div>
        <div className="events" style={{ marginBottom: 10 ,display:"flex",gap:12 }}>
         <div> <FaCalendarCheck /></div> 
          <a href="">Events</a>
        </div>
        <div className="community" style={{marginBottom: 10,display:"flex",gap:12}}>
          <FaUserFriends />
          <a href="">Community</a>
        </div>
      </div>

      <div className="moreitem">
        <div className="setting" style={{ marginBottom: 10 ,display:"flex",gap:12 }}>
          <FaRegSun />
          <a href="">Setting</a>
        </div>
        <div className="report" style={{ marginBottom: 10,display:"flex",gap:12 }}>
          <FaExclamationCircle />
          <a href="">Report</a>
        </div>
        <div className="helpsupport" style={{ marginBottom: 10 ,display:"flex",gap:12}}>
          <FaHeadset />
          <a href="">Help and Support</a>
        </div>
        <div className="logout" style={{ marginBottom: 10 ,display:"flex",gap:12}}onClick={()=> {
          localStorage.removeItem("TOKEN_VALUE");
          navigate("/login")

        }}>
          <div className="icon" ><FaSignOutAlt /></div>
          <a >Logout</a>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
