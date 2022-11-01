import "./topbar.css";
import { Search, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router";
export default function Topbar() {
  let { user,dispatch } = useContext(AuthContext);
  const history = useHistory();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const logout = () =>{
    dispatch({type:"LOGOUT"})
    localStorage.clear()
      history.push("/login");
    // console.log("logout");
  }
  return (
    <div className="topbarContainer"> 
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Recipe App</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink" onClick={logout}>logout</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}
