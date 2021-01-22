import React from "react";
import axios from "axios";
import { NavBar } from "./NavBar";
import image1 from "./images/Kits/KitPic1.jpeg";
import Rating from "./Rating.jsx";
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
      userID: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeStars = this.changeStars.bind(this);
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
        this.setState({ averageRating: theAverage + ' out of 5'});
      } else {
        this.setState({ averageRating: 'No Average Rating Yet'})
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
      user_id: this.state.userID,
      company_id: this.state.bizID,
      review: this.state.currentReview,
    });
    if (response.ok) this.setState({ submitProcessing: false });
    this.setState({ myReview: this.state.currentReview});
    this.setState({ currentReview: "" });
  };

  changeStars = (event) => {
    console.log(event.target);
  };

  render() {
    const bizID = this.state.bizID;
    let bizCategory = "";
    if (bizID <= 12) {
      bizCategory = "Meals"
    } else if (bizID >= 24) {
      bizCategory = "produce"
    } else {
      bizCategory = "Mkits"
    }
    const bizGroup = Data[bizCategory];
    console.log(bizGroup);
    const theBizArray = bizGroup.filter(biz => {
      return biz.ID === bizID
    });
    const theBiz = theBizArray[0];
    console.log(theBiz);
    const BizName = theBiz.BizName;
    const link = theBiz.link;
    const Description = theBiz.Description;
    const Pricing = theBiz.Pricing;
    const Options = theBiz.Options;
    return (
      <div>
        <NavBar />
        <h4>{BizName}</h4>
        <div class="compTemp-items">
          <img class="compTemp-image" src={image1} />

          <a class="compTemp-main-heading" href={link}></a>
          <div class="rating-stars">
            <Rating userID={this.state.userID} companyID={this.state.bizID} />
          </div>
          <h3>Average Using Rating: {this.state.averageRating}</h3>
          <h3>Description:</h3>
          <div class="info-text">
            <p class="info-text">{Description}</p>{" "}
          </div>
          <h3>Pricing:</h3>
          <p class="info-text">{Pricing}</p>
          <h3>Options:</h3>
          <p class="info-text">{Options}</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              <h3>Write Your Own Review:</h3>
            </label>
            <div class="review-box">
              <textarea
                class="box"
                value={this.state.currentReview}
                onChange={this.handleChange}
                placeholder="Write Your Own Review"
              />
            </div>
            <div class="info-text">
              <button class="button">Submit</button>
            </div>
          </form>
          <div>
            <h5>Your Review:</h5>
            <p>{this.state.myReview}</p>
          </div>
          <div>
            <h3>User Reviews</h3>
            {this.state.userReviews.map((review) => (
              <Reviews userID={review.user_id} reviewText={review.review} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CompTemp;
