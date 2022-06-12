import React, { Component } from 'react';

import "./About.css";
import childhoodPicture from "../assets/childhoodPicture.png";

  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={childhoodPicture}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Rohan Bohra</div>
            <div className="brief_description">
            I am a sophomore at UC Berkeley, studying CS and possibly Math. 
            Outside of my academic interests, I like biking and watching soccer.
            </div>
          </div>
        </div>
      </div>
    )
  }
}