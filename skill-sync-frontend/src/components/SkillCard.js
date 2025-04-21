import React from "react";
import './SkillCard.css';
function SkillCard({icon, name, level, experience}){
    return(
        <div className={`skill-card ${level.toLowerCase()}`}>
            <h2>{icon} {name}</h2>
            <p><strong>Level:</strong> {level}</p>
            <p><strong>Experience:</strong> {experience}</p>
        </div>
    );
}
export default SkillCard;