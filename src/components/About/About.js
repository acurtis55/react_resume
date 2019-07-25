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
          <AboutItem item={{
            title:"University of Texas at Austin",
            position:"Dept. of Biomedical Engineering Intern",
            description: "Contributed to the development of systems for cancer treatment using interferon-alpha. Worked as a lab assistant with Prof. Peppas, member of the National Academies of Medicine and Engineering. Helped in the design and preparation new biopolymeric carrier to be used in vehicles for therapeutic protein delivery",
            time:"Summer 2016"
          }}/>
      </div>
    );
  }
}

export default About;
