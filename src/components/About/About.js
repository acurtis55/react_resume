import React, { Component } from 'react';
import AboutItem from './AboutItem';

class About extends Component {

  render() {
    return(
      <div className="about">
        <h5 className="pb-2">Education and Work Experience</h5>
          <AboutItem item={{
            title:"Texas A&M University",
            position:"Bachelor's in Computer Science",
            description: "In progress...",
            time:"May 2022"
          }}/>
      </div>
    );
  }
}

export default About;
