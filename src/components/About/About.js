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
            title:"Salesforce",
            position: "SDE Intern",
            description: "Designed and implemented file metrics component for core Salesforce app. Logged and aggregated data to HBase triggered by UI-tier user actions. Developed front-end component to display file metrics. Wrote unit and end-to-end tests for front-end and back-end. Used: Aura (Salesforce UI framework), CSS, JavaScript, Java",
            time:"Summer 2018"
          }}/>
          <AboutItem item={{
            title:"Salesforce",
            position: "SDE Intern",
            description: "Created a component for core Salesforce app. Component recommended files relevant to the user; SOSL query matched metadata/prioritized results. Front-end component built for scalability and reusability by conforming to Lightning Design System. Wrote unit and end-to-end tests for front-end and back-end. Used: Aura (Salesforce UI framework), CSS, JavaScript, Java",
            time:"Summer 2017"
          }}/>
          <AboutItem item={{
            title:"Amazon",
            position: "SDE Intern",
            description: "Designed and developed GUI for Virtual Microphone Array design. Built front-end and setup back-end infrastructure to process serialized data from web app. Server build consisted of Matlab and Python scripts, which simulated microphone array designs. Used: Python, HTML/CSS, JavaScript, Matlab, C++, Git, Bash ",
            time: "Summer 2016"
          }}/>
      </div>
    );
  }
}

export default About;
