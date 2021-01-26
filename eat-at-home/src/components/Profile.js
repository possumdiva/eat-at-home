import React from "react";
import { NavBar } from "./NavBar";
import image from "./images/Team/banana.jpeg";
import eahServer from "../api/eah-server";
import { Data } from "./RenderComp";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      saves: [],
      data: Data,
    };
  }

  async componentDidMount() {
    const savesUrl = "/api/this_user/saves";
    const reviewsUrl = "/api/this_user/reviews";

    const savesResponse = await eahServer.get(savesUrl);
    const reviewsResponse = await eahServer.get(reviewsUrl);

    this.setState({ reviews: reviewsResponse.data, saves: savesResponse.data });

  }

  render() {
    return (
      <div className="main">
        <NavBar />
        <div className="profile-items">
          <div className="header-image">
            <img src={image} alt="header"></img>
          </div>
        </div>
        <div className="profile-items">
          <div className="profile-header">
            <h3>My Favorites</h3>
          </div>
        </div>
        <div className="test">
          {this.state.saves.map((save, idx) => {
            const bizID = save.company_id;
            let bizCategory;
            if (bizID <= 12) {
              bizCategory = "Meals";
            } else if (bizID >= 24) {
              bizCategory = "produce";
            } else {
              bizCategory = "Mkits";
            }

            const company = this.state.data[bizCategory].find((biz) => {
              return biz.ID === bizID;
            });

            return (
              <div key={idx} className="save">
                <div className="save-items">
                  <div className="line-header">{company.BizName}</div>
                  <div className="line-itmes">{company.link}</div>
                  <div className="line-itmes">{company.description}</div>
                  <div className="line-itmes">{company.pricing}</div>
                  <div className="line-itmes">{company.Options}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="profile-items">
          <div className="profile-header">
            <h3>My Reviews</h3>
          </div>
        </div>
        <div className="test">
          {this.state.reviews.map((review, idx) => {
            const bizID = review.company_id;
            let bizCategory;
            if (bizID <= 12) {
              bizCategory = "Meals";
            } else if (bizID >= 24) {
              bizCategory = "produce";
            } else {
              bizCategory = "Mkits";
            }

            const company = this.state.data[bizCategory].find((biz) => {
              return biz.ID === bizID;
            });

            return (
              <div key={idx} className="save">
                <div className="save-items">
                  <div className="line-header">{company.BizName}</div>
                  <div className="line-itmes">{review.review}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="logOut-items">
          <a href="http://localhost:8080/logout">
            <button className="button">Logout</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Profile;
