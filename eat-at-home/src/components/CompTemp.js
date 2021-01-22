import React from "react";
import axios from "axios";
import { NavBar } from "./NavBar";
import image1 from "./images/Kits/KitPic1.jpeg";
import Rating from "./Rating.jsx";
import Reviews from "./Reviews";
import eahServer from "../api/eah-server";

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
      reviewerIDs: [],
      bizID: this.props.location.state.bizID,
      userID: "1",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeStars = this.changeStars.bind(this);
  }

  async componentDidMount() {
    console.log("this is the info" + this.state.bizID);
    try {
      const response = await eahServer.get("/api/comp/review/1");
      const rawData = response.data;
      let allRatings = [];
      let allReviews = [];
      rawData.forEach((element) => {
        if (element.user_id === this.state.userID) {
          console.log("found my review: " + element.review);

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
      this.setState({ averageRating: theAverage });
      this.setState({ userReviews: allReviews });
      console.log(this.state.userReviews);
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
    this.setState({ currentReview: "" });
  };

  changeStars = (event) => {
    console.log(event.target);
  };

  render() {
    const BizName = "Freshly";
    const link = "https://www.freshly.com/";
    const ID = 1;
    const Description =
      "Freshly meals come individually packaged and portioned, so these work well for single folks or couples without kids. They are assembled much like TV dinners but are far more attractive and -- spoiler alert -- they taste better too. Freshly meals arrive very cold but not quite frozen, so it's up to you to heat and eat them right away or freeze a few meals for a rainy day. (Note: Some foods freeze much better than others, I found). Through the website, you can choose a subscription plan that includes as few as four or as many as 12 meals per week. Freshly has plenty of healthy meal choices and options for folks with dietary restrictions, including gluten-free, low-carb and low-calorie. There are, however, almost no plant-based options so this is not a good meal delivery service for vegetarians or vegans. Freshly ships to every state in the lower 48 (sorry, Hawaii and Alaska!) and you can also change, pause or cancel your plan anytime, so it's very low risk if you just want to check it out for a week or two.";
    const Pricing = "$46.00 - $102.00 per week - shipping not included";
    const Options = "Gluten-free";
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
          <h3>Average Using Rating: {this.state.averageRating} / 5</h3>
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
            <h3>Your Review:</h3>
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
