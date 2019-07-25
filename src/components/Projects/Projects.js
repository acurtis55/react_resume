import React, { Component } from 'react';
import ProjectItem from './ProjectItem'
import { Row, Container } from 'mdbreact';

class Projects extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="project-items-container">
            <ProjectItem
              title="IMDB Search"
              img="imdb.jpg"
              repo="imdb_search"
            />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Projects;
