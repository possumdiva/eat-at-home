import React from "react";
import { NavBar } from "./NavBar";
import image1 from './images/Kits/KitPic1.jpeg';
import Rating from './Rating.jsx';

class CompTemp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentReview: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeStars = this.changeStars.bind(this);
  };

  handleChange = (event) => {
    this.setState({currentReview: event.target.value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.currentReview);
  };

  changeStars = (event) => {
    console.log(event.target);
  }

  render() {
    const BizName = "Freshly";
    const link = "https://www.freshly.com/";
    const ID = 1;
    const Description = 
      "Freshly meals come individually packaged and portioned, so these work well for single folks or couples without kids. They are assembled much like TV dinners but are far more attractive and -- spoiler alert -- they taste better too. Freshly meals arrive very cold but not quite frozen, so it's up to you to heat and eat them right away or freeze a few meals for a rainy day. (Note: Some foods freeze much better than others, I found). Through the website, you can choose a subscription plan that includes as few as four or as many as 12 meals per week. Freshly has plenty of healthy meal choices and options for folks with dietary restrictions, including gluten-free, low-carb and low-calorie. There are, however, almost no plant-based options so this is not a good meal delivery service for vegetarians or vegans. Freshly ships to every state in the lower 48 (sorry, Hawaii and Alaska!) and you can also change, pause or cancel your plan anytime, so it's very low risk if you just want to check it out for a week or two.";
    const Pricing = "$46.00 - $102.00 per week - shipping not included";
    const Image = "KitPick1.jpeg";
    const Options = "Gluten-free";  
  return (
    <div className="main">
      <NavBar />
      <h2>{BizName}</h2>
      <img src={image1} />
      <a href={link}>Website</a>
      <h3>Description:</h3>
      <p>{Description}</p>
      <h3>Pricing:</h3>
      <p>{Pricing}</p>
      <h3>Options:</h3>
      <p>{Options}</p>
      <form onSubmit={this.handleSubmit}>
        <label>Write Your Own Review:</label>
        <textarea value={this.state.currentReview} onChange={this.handleChange} placeholder="Write Your Own Review" />
        <button>Submit</button>
      </form>
      <Rating />
    </div>
  );
}}

export default CompTemp;
