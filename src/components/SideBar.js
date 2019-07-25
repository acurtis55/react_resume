import React, { Component } from 'react';
import Profile from './Profile';
import Links from './Links/Links';

class SideBar extends Component {

  render() {
    return(
      <div className="sidebar">
        <div className="sidebar-content-container">
          <Profile/>
          <Links/>
          <div className="bio">
            Hi! My name is Alexandria Curtis. I am currently a student at Texas A&M University.
          </div>
        </div>
      </div>
    );
  }

}

export default SideBar;
