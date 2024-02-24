import React from 'react'
import Heading from '../Heading/Heading';
import './herosection.css';
import background from '../../assets/Grey_chair.png';

function HeroSection () {
  return (
    <div className='hero-section'>
        <Heading 
        level='h1'
        text='Современные и стильные интерьеры для комфортной жизни'/>
        
        <div className='backgroundImage' style ={{backgroundImage: `url(${background})`,}}>
            
          <p className='backgroundImageText'>
            Мы - команда квалифицированных дизайнеров и архитекторов, занимающихся разработкой и реализацией дизайн-проектов</p>
        </div>
    </div>
  );
}

export default HeroSection