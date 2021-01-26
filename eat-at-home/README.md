# Eat @ Home :fork_and_knife: :stew: :poultry_leg: :peach:

![image](https://user-images.githubusercontent.com/35972972/105803748-15b19b80-5f6c-11eb-9689-d35bec3948eb.png)

![GitHub language count](https://img.shields.io/github/languages/count/possumdiva/eat-at-home)
![GitHub last commit](https://img.shields.io/github/last-commit/possumdiva/eat-at-home)
![GitHub contributors](https://img.shields.io/github/contributors/possumdiva/eat-at-home?color=purple)
![GitHub top language](https://img.shields.io/github/languages/top/possumdiva/eat-at-home?color=red)
![NPM](https://img.shields.io/npm/l/express)


***Eat at Home - From produce delivery to dinner meals to online grocery.

[Live website](https://eat-at-home-server.herokuapp.com/)

## Project Purpose
Eat at Home is an app for users who want a comprehensive list of meal and online grocery delivery services.  Many of us are tired of trying to keep meals tasty and exciting and they want options so they don't have to cook every night and they don't have to run back and forth to the grocery store.

## :hammer_and_wrench: Technologies Used

- CSS
- React.js
- Javascript
- Node.js
- Express.js
- Passport.js
- PostgreSQL
- Sequelize
- OAuth Authentication
- Heroku

 ## 🖥 Screenshots:
#### :point_down: Eat at Home | Home Page

![image](https://user-images.githubusercontent.com/35972972/105805071-3b8c6f80-5f6f-11eb-9025-e4a999246d4b.png)
<br />
<br />
![image](https://user-images.githubusercontent.com/35972972/105805343-ca998780-5f6f-11eb-9b12-87a7fc10cd6e.png)
<br />
<br />
![image](https://user-images.githubusercontent.com/35972972/105806174-7abbc000-5f71-11eb-9e0e-ef49b7956388.png)
<br />
<br />
![image](https://user-images.githubusercontent.com/35972972/105806180-7ee7dd80-5f71-11eb-9442-10c49e032c4d.png)
<br />
<br />
#### :point_down: Eat at Home | Profile Page

![image](https://user-images.githubusercontent.com/35972972/105807447-05052380-5f74-11eb-8d7b-fa7310c799af.png)
<br />
<br />
![image](https://user-images.githubusercontent.com/35972972/105807543-34b42b80-5f74-11eb-966b-42a263caafed.png)
<br />
<br />
![image](https://user-images.githubusercontent.com/35972972/105807576-44cc0b00-5f74-11eb-9ee2-608073e059b7.png)
<br />
<br />


## ⚙ How to run
### 1. Clone this repository
Under the repository name, click on the code button and copy the clone URL for this repository.
Open your terminal and type ```git clone https://github.com/possumdiva/eat-at-home.git```.
### 2. Open the folder
After cloning the repository, use your favorite code editor to open the folder. We recommend [Visual Studio Code](https://code.visualstudio.com/).
### 3. Enter in the directory
Type ```cd eat-at-home``` in your terminal.
### 4. Install the required packages
You will need to install [PostgreSQL](https://www.postgresql.org/download/) and [Node.js](https://nodejs.org/en/) to run the back-end piece.
### 5. Install the dependencies
Run ```npm install``` or ```yarn install``` in your terminal.
### 6. Execute the application
Run ```npm start``` or ```yarn start``` in your terminal.
### 7. Open in your browser
The application will be available at http://localhost:3000.
<br>
<br>
## Eat @ Home is also deployed on Heroku. You can see a demo by clicking [here](https://eat-at-home-server.herokuapp.com/).
<br>

## Code Snippet - Displays users selected favorite companies (Profile Component)
<br />

```
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
          <img src={image} alt="header"></img>
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
```            


## :busts_in_silhouette: Team Members:
  
  * Stacey Graham <br>
  [GitHub](https://github.com/stashag) <br />
  [Portfolio](https://www.stacey.codes)

  * Heather Luttrell <br>
  [GitHub](https://github.com/possumdiva)
  <br />
  [Portfolio](www.heatherluttrell.com)
  
  * Elijah Wilcott <br>
  [GitHub](https://github.com/ejw773)
  <br />
  [Portfolio](https://elijahwilcott.com)