import React, { useState, useEffect } from "react";
import "../Style/scss/userDescription.scss";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AddIcon from "@mui/icons-material/Add";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const UserDescription = () => {
  const [profileIcon, setProfileIcon] = useState(
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  );
  const profileIMg = "";

  useEffect(() => {
    if (profileIMg) {
      setProfileIcon(profileIMg);
    }
  }, []);

  const [recArrow, setrecArrow] = useState({
    more: "none",
    less: "block",
    content: "block",
  });

  const [groupArrow, setgroupArrow] = useState({
    more: "none",
    less: "block",
    content: "block",
  });

  const recArrowFunc = () => {
    if (recArrow.more == "block") {
      setrecArrow((recArrow) => ({
        ...recArrow,
        less: "block",
        more: "none",
        content: "block",
      }));
    } else if (recArrow.less == "block") {
      setrecArrow((recArrow) => ({
        ...recArrow,
        less: "none",
        more: "block",
        content: "none",
      }));
    }
  };

  const groupArrowFunc = () => {
    if (groupArrow.more == "block") {
      setgroupArrow((groupArrow) => ({
        ...groupArrow,
        less: "block",
        more: "none",
        content: "block",
      }));
    } else if (groupArrow.less == "block") {
      setgroupArrow((groupArrow) => ({
        ...groupArrow,
        less: "none",
        more: "block",
        content: "none",
      }));
    }
  };

  return (
    <>
      <div className="userDescriptionBody">
        <div className="UserProfileBody">
          <div className="UserImg">
            <div className="userBannerImg">
              <img
                src="https://images.template.net/56075/Motivational-Linkedin-Banner-Template-sm-1611744369353-560750.jpeg"
                alt="BannerIMG"
              />
            </div>
            <div className="userProfileImg">
              <img src={profileIcon} alt="ProfileIMG" />
            </div>
          </div>
          <div className="UserPRofileText">
            <div className="userName">
              <h1>Rachit Gupta</h1>
            </div>
            <div className="userTitle">
              <p>
                FRONT-END DEVELOPER || REACT JS || JAVASCRIPT || TYPESCRIPT ||
                NODE JS
              </p>
            </div>
          </div>
          <hr /> {/*  this is use for make a line between two components */}
          <div className="Profile__Viewed__Impressions">
            <div className="Profile__Viewed__Impressions__Text">
              <button>
                <span>
                  <p
                    style={{
                      marginLeft: "2.5%",
                      marginTop: "1%",
                      marginBottom: "1%",
                    }}
                  >
                    Who's viewed your profile
                  </p>
                  <p
                    style={{
                      marginRight: "2.5%",
                      marginTop: "1%",
                      marginBottom: "1%",
                    }}
                  >
                    32
                  </p>
                </span>
              </button>
              <button>
                <span>
                  <p
                    style={{
                      marginLeft: "2.5%",
                      marginTop: "1%",
                      marginBottom: "1%",
                    }}
                  >
                    Impressions of your post
                  </p>
                  <p
                    style={{
                      marginRight: "2.5%",
                      marginTop: "1%",
                      marginBottom: "1%",
                    }}
                  >
                    410
                  </p>
                </span>
              </button>
            </div>
          </div>
          <hr /> {/*  this is use for make a line between two components */}
          <div className="premiumStatusBody">
            <button>
              <div className="PremiumStatus">
                <p>Access exclusive tools & insights</p>
                <span>
                  <WorkspacePremiumIcon />
                  <h4>Get hired faster. Try Premium free.</h4>
                </span>
              </div>
            </button>
          </div>
          <hr /> {/*  this is use for make a line between two components */}
          <div className="profile__Item__Body">
            <button>
              <div className="Profile__Items">
                <span>
                  <TurnedInIcon />
                  <p>My Items</p>
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* -------------------------------------- */}

        <div className="UserRecentBody">
          <div className="StatusText">
            <div className="recent">
              <span>
                <h6>Recent </h6>
                <ExpandMoreIcon
                  onClick={recArrowFunc}
                  style={{ display: recArrow.more }}
                />
                <ExpandLessIcon
                  onClick={recArrowFunc}
                  style={{ display: recArrow.less }}
                />
              </span>
              <button style={{ display: recArrow.content }}>
                <span>
                  <GroupsIcon />
                  <p>Frontend developer and Web</p>
                </span>
              </button>
            </div>

            {/* -------------------- */}

            <div className="group">
              <span>
                <h6>Groups</h6>
                <ExpandMoreIcon
                  onClick={groupArrowFunc}
                  style={{ display: groupArrow.more }}
                />
                <ExpandLessIcon
                  onClick={groupArrowFunc}
                  style={{ display: groupArrow.less }}
                />
              </span>
              <button style={{ display: groupArrow.content }}>
                <GroupsIcon />
                <p>Frontend developer and Web</p>
              </button>
            </div>

            {/* -------------- */}

            <div className="event">
              <p>Events</p>
              <AddIcon />
            </div>
            <p>Followed Hashtags</p>
          </div>
          <hr /> {/*  this is use for make a line between two components */}
          <button>Discover more</button>
        </div>
      </div>
    </>
  );
};

export default UserDescription;
