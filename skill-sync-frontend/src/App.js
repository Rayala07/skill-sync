import React from "react";
import SkillCard from './components/SkillCard';
import './App.css';
import skills from "./data/skills";
function App(){
  return (
    <div className="app-header">
      <h1>Hello Viswanath !</h1>
    <div className="skill-wrapper">
      {
        skills.map((skill) => (
          <SkillCard 
          key={skill.id}
          name={skill.name}
          icon={skill.icon}
          level={skill.level}
          experience={skill.experience}
          />
        ))
      }
    </div>
    </div>
  );
}
export default App;