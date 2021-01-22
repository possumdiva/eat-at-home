import React from 'react';
import axios from 'axios';
import eahServer from '../api/eah-server';

class SaveButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        saved: false,
        savedID: null
      };
      this.handleClick = this.handleClick.bind(this);
    } 
    
    async componentDidMount() {
        try {
            const savesURL = "/api/saves/" + this.props.userID;
            console.log(savesURL);
            const savesResponse = await eahServer.get(savesURL);
            const rawData = savesResponse.data;
            // console.log(this.props.company_id);
            console.log(rawData[0]);
            let obj = rawData.find(o => o.company_id === this.props.companyID)
            if (obj === undefined) {
            } else {
                this.setState({
                    saved: true,
                    savedID: obj.id
                })
            }
            console.log(this.state);
            }
        catch (err) {
                console.log(`There was an error loading the saves information: ` + err)
            }
    }

    handleClick = async (event) => {
        const bizID = this.props.companyID;
        const userID = this.props.userID;
        if (this.state.saved === false) {
            const theURL = "/api/saves/" + userID;
            const response = await eahServer.post(theURL, {
                company_id: bizID
            });
            console.log(response.data.id);
            this.setState({
                saved: !this.state.saved,
                savedID: response.data.id
            });
            } else {
                const theURL = "/api/saves/" + this.state.savedID;
                const response = await eahServer.delete(theURL, {
                    id: this.state.savedID
                });
                console.log(event);
                this.setState({
                    saved: !this.state.saved
                });
    
        }
    }
    
    render() {
      const text = this.state.saved ? 'saved' : 'haven\'t saved';
      const label = this.state.saved ? 'Unsave' : 'Save'
      return (
        <div className="saveButton">
          <button onClick={this.handleClick}>
            {label}</button>
        </div>
      );
    }
  }
  
  export default SaveButton;