import React, { Component } from 'react';
import LinkItem from './LinkItem';

class Links extends Component {

  render() {
    return (
      <div className="link-container">
        <div className="links">
          <LinkItem icon='linkedin' href='https://www.linkedin.com/in/alexandria-curtis-799208162/'/>
          <LinkItem icon='envelope' href='mailto:alexandriacurtis55@gmail.com'/>
          <LinkItem icon='github' href='https://github.com/acurtis55/'/>
        </div>
      </div>
  );
  }
}

export default Links;
