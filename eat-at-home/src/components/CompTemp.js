import React from "react";
import axios from "axios";
import { NavBar } from "./NavBar";
import image1 from "./images/Kits/KitPic1.jpeg";
import Rating from "./Rating.jsx";
import Stars from "./StarRating";
import SaveButton from "./SaveButton";
import Reviews from "./Reviews";
import eahServer from "../api/eah-server";
import { Data } from "./RenderComp.js";

class CompTemp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentReview: "",
      reviewToSubmit: "",
      submitProcessing: false,
      myReview: "",
      averageRating: null,
      userReviews: [],
      userReviewLabel: "",
      reviewerIDs: [],
      bizID: this.props.location.state.bizID,
      theBiz: {},
      userID: 1,
      savedToggle: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    try {
      const theURL = "/api/comp/review/" + this.state.bizID;
      const response = await eahServer.get(theURL);
      const rawData = response.data;
      let allRatings = [];
      let allReviews = [];
      rawData.forEach((element) => {
        if (element.user_id === this.state.userID) {
          this.setState({ myReview: element.review });
        }
      });
      rawData.forEach((element) => {
        allRatings.push(element.rating);
        allReviews.push({
          review: element.review,
          user_id: element.user_id,
        });
      });
      let sum = 0;
      allRatings.forEach((num) => {
        sum += num;
      });
      let theAverage = sum / allRatings.length;
      if (theAverage) {
        this.setState({ averageRating: theAverage + " out of 5" });
      } else {
        this.setState({ averageRating: "No Average Rating Yet" });
      }
      this.setState({ userReviews: allReviews });
      // WRITE CODE HERE TO SET USERREVIEW LABEL
    } catch (err) {
      console.log(`There was an error loading ratings from the server: ${err}`);
    }
  }

  handleChange = (event) => {
    this.setState({ currentReview: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ submitProcessing: true });
    const response = await eahServer.post("/api/review", {
      company_id: this.state.bizID,
      review: this.state.currentReview,
    });
    if (response.ok) this.setState({ submitProcessing: false });
    this.setState({ myReview: this.state.currentReview });
    this.setState({ currentReview: "" });
  };

  render() {
    const bizID = this.state.bizID;
    let bizCategory = "";
    if (bizID <= 12) {
      bizCategory = "Meals";
    } else if (bizID >= 24) {
      bizCategory = "produce";
    } else {
      bizCategory = "Mkits";
    }
    const bizGroup = Data[bizCategory];
    const theBizArray = bizGroup.filter((biz) => {
      return biz.ID === bizID;
    });
    const theBiz = theBizArray[0];
    const BizName = theBiz.BizName;
    const link = theBiz.link;
    const Description = theBiz.Description;
    const Pricing = theBiz.Pricing;
    const Options = theBiz.Options;
    return (
      <div>
        <NavBar />

        <h4>{BizName}</h4>

        <div className="compTemp-items">
          <img className="compTemp-image" src={image1} />
          <div>
            <a className="compTemp-main-heading" href={link}></a>
            {/* <div className="rating-stars">
              <Rating userID={this.state.userID} companyID={this.state.bizID} />
              <Stars userID={this.state.userID} companyID={this.state.bizID} />
            </div> */}
            {/* <h3>Average Using Rating: {this.state.averageRating}</h3> */}
            <h3>Description:</h3>
            <div className="info-text">
              <p className="info-text">{Description}</p>{" "}
            </div>
            <div className="button-pos">
              Click "Save" to add company to your favorites!
            </div>
            <div>
              <SaveButton
                userID={this.state.userID}
                companyID={this.state.bizID}
              />
            </div>
            <h3>Pricing:</h3>
            <div className="info-text">
              <p>{Pricing}</p>
            </div>

            <h3>Options:</h3>
            <p className="info-text">{Options}</p>
            <form onSubmit={this.handleSubmit}>
              <label>
                <h3>Write Your Own Review:</h3>
              </label>
              <div className="review-box">
                <textarea
                  className="box"
                  value={this.state.currentReview}
                  onChange={this.handleChange}
                  placeholder="Write Your Own Review"
                />
              </div>

              <button className="button">Submit</button>
            </form>

            {/* <div className="reviews-header">
              <h3>Reviews</h3>
              <div className="info-text">
                {this.state.userReviews.map((review) => (
                  <Reviews userID={review.user_id} reviewText={review.review} />
                ))}
              </div>
            </div> */}
          </div>
        </div>
        <div className="feature-divider"></div>
        <hr size="2" width="600px" color="black"></hr>

        <div className="reviews-header">
          <div>
            <div>
              {this.state.userReviews.map((review) => (
                <Reviews userID={review.user_id} reviewText={review.review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompTemp;
