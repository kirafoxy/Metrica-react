
import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard';
import Button from '../Buttons/button';
import Heading from '../Heading/Heading';
import project1img from '../../assets/brow_sofa.jpg';
import project2img from '../../assets/living_room.png';
import project3img from '../../assets/dining_room.png';


const projects = [
  {
    title :'ЖК ПРАВОБЕРЕЖНЫЙ',
    square : 112,
    year :'2023',
    link :'/project1',
    image :project1img,
    isNew :true
  },

  { 
    title: 'ЖК НОРВЕЖСКИЙ ПАРК',
    square:75,
    year:'2023',
    link:'/project1',
    image: project2img,
    isNew: false
  },

  {
    title: 'ЖК СОСНОВСКИЕ ОЗЕРА ',
    square: 94,
    year:'2022',
    link:'/project1',
    image: project3img,
    isNew: false
  }
];

function ProjectsSection () {
    return (
      <div> 
        <Heading 
        level='h2'
        text='ПРОЕКТЫ'/>

      {projects.map(function(project) {
        return (
            <ProjectCard 
              title={project.title}
              square={project.square}
              year={project.year}
              link={project.link}
              image={project.image}
              isNew={project.isNew} />
          )
      }) }
      
     
        <Button 
        size = 'large'
        text ='Смотреть все проекты'  />
      </div>
      
    );
}

export default ProjectsSection
  