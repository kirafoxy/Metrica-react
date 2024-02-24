
import React from 'react'
import './project.css';


function ProjectCard (props) {
    return (
      <div className='projectCard'> 
        { props.isNew && (<div className='markerRelevance'>NEW</div>)}
        <div> 
          <div>{props.isNew}</div>
          <img src={props.image} alt={props.title} />
          <p className='nameProject'>{props.title} — {props.square} м² — {props.year}</p>
          <a className='linkProject' href={props.link}>Подробнее →</a>
        </div>
      </div>
      
    );
}

export default ProjectCard
  