
import React from 'react'
import './project.css';


function ProjectCard (props) {
    return (
      <div> 
        { props.isNew && (<div>NEW</div>)}
        <div> 
          <div>{props.isNew}</div>
          <img src={props.image} alt={props.title} />
          <p>{props.title} — {props.square} м² — {props.year}</p>
          <a href={props.link}>Подробнее →</a>
        </div>
      </div>
      
    );
}

export default ProjectCard
  