import React from "react";
import { NavBar } from "./NavBar";
import image from "./images/Team/banana.jpeg";
import eahServer from "../api/eah-server";
import { Data } from "./RenderComp";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    console.log("HELLOOOOOO");
    const savesUrl = "/api/this_user/saves";
    const reviewsUrl = "/api/this_user/reviews";

    const savesResponse = await eahServer.get(savesUrl);
    const reviewsResponse = await eahServer.get(reviewsUrl);

    console.log(JSON.stringify(savesResponse.data));
    console.log(JSON.stringify(reviewsResponse.data));
  }

  render() {
    return (
      <div className="main">
        <NavBar />
        <div className="profile-items">
          <div className="row">
            <div className="column">
              <div className="c-image">
                <img src={image}></img>
              </div>
              <a href="https://eat-at-home-server.herokuapp.com/logout">
                <button className="button">Logout</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
