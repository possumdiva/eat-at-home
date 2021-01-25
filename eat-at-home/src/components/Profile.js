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
      saves: [
        // Hard code the save data for local testing without DB
        // {
        //   "id": 3,
        //   "user_id": 2,
        //   "company_id": 5,
        //   "createdAt": "2021-01-25T02:40:04.952Z",
        //   "updatedAt": "2021-01-25T02:40:04.952Z"
        // },
        // {
        //   "id": 4,
        //   "user_id": 2,
        //   "company_id": 1,
        //   "createdAt": "2021-01-25T03:07:54.280Z",
        //   "updatedAt": "2021-01-25T03:07:54.280Z"
        // }
      ],
      data: Data,
    };
  }

  async componentDidMount() {
    const savesUrl = "/api/this_user/saves";
    const reviewsUrl = "/api/this_user/reviews";

    const savesResponse = await eahServer.get(savesUrl);
    const reviewsResponse = await eahServer.get(reviewsUrl);

    this.setState({ reviews: reviewsResponse.data, saves: savesResponse.data });

    console.log(savesResponse);
    console.log(reviewsResponse);
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
              <a href="http://localhost:8080/logout">
                <button className="button">Logout</button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="test"
          style={{ margin: "2rem", border: "cyan 4px solid", color: "magenta" }}
        >
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
              <div
                key={idx}
                className="save"
                style={{ border: "2px solid hotpink" }}
              >
                <div>{company.BizName}</div>
                <div>{company.link}</div>
                <div>{company.ID}</div>
                <div>{company.description}</div>
                <div>{company.pricing}</div>
                <div>{company.Image}</div>
                <div>{company.Options}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Profile;
