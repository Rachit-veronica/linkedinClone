import react, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import NotificationIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "../Style/scss/navbar.scss";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <div className="navbarOutterBody">
        <div className="navbarBody">
          <div className="navbar__LeftSide">
            <div className="navbarLogo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
                style={{ width: "30px" }}
              />
            </div>
            <div className="searchBar">
              <SearchIcon />
              <input
                type="text"
                value={searchInput}
                placeholder="Search"
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
          </div>
          <div className="navbar__RightSide">
            <ul>
              <li>
                <HomeIcon />
                <p>Home</p>
              </li>
              <li>
                <PeopleIcon />
                <p>My Network</p>
              </li>
              <li>
                <BusinessCenterIcon />
                <p>Jobs</p>
              </li>
              <li>
                <MessageIcon />
                <p>Messaging</p>
              </li>
              <li>
                <NotificationIcon />
                <p>NOtifications</p>
              </li>
              <li>
                <AccountCircleIcon />
                <p>Me</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
