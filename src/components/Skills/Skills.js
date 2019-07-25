import React, { Component } from 'react';
import SkillsItem from './SkillsItem';

class Skills extends Component {
  render() {
    return(
      <div className="mt-4">
      <SkillsItem title="Languages"
                  items={[
                    {name:"Java", logo:"java.png"},
                    {name:"Python", logo:"python.png"},
                    {name:"C++", logo:"cpp.png"},
                  ]}/>
      <SkillsItem title="Libraries, Frameworks & Tools"
                  items={[
                    {name:"GitHub", logo:"github.png"},
                    {name:"Flask", logo:"flask.png"},
                  ]}/>
      </div>
    );
  }
}

export default Skills;
