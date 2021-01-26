import React from "react";
import axios from "axios";
import eahServer from "../api/eah-server";

class SaveButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false,
      savedID: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // Grabs the current users saves | Instead of grabbing and sorting, an API call for just the one business would be better
  async componentDidMount() {
    try {
      const savesURL = "/api/this_user/saves";
      const savesResponse = await eahServer.get(savesURL);
      const rawData = savesResponse.data;
      let obj = rawData.find((o) => o.company_id === this.props.companyID);
      if (obj === undefined) {
      } else {
        this.setState({
          saved: true,
          savedID: obj.id,
        });
      }
      } catch (err) {
      }
    }

  handleClick = async (event) => {
    const bizID = this.props.companyID;
    const userID = this.props.userID;

    // If the company has not been saved, save it and change the button text
    if (this.state.saved === false) {
      const theURL = "/api/this_user/save";
      const response = await eahServer.post(theURL, {
        company_id: bizID,
      });
      this.setState({
        saved: !this.state.saved,
        savedID: response.data.id,
      });
      
    // If the company HAS been saved, unsave it and change the button text
    } else {
      const theURL = "/api/saves/" + this.state.savedID;
      const response = await eahServer.delete(theURL, {
        id: this.state.savedID,
      });
      this.setState({
        saved: !this.state.saved,
      });
    }
  };

  render() {
    const text = this.state.saved ? "saved" : "haven't saved";
    const label = this.state.saved ? "Unsave" : "Save";
    return (
      <div className="saveButton">
        <button className="button" onClick={this.handleClick}>
          {label}
        </button>
      </div>
    );
  }
}

export default SaveButton;
