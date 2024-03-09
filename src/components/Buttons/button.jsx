import React from 'react'
import './button.css'

function Button (props) {
  if ( props.size === 'large') {
    return (  
     
      <button className='button-h1'>{props.text}</button>
    
    );

  }

  if (  props.size === 'medium') {
    return (  
     
      <button className='button-h2'>{props.text}</button>
    
    );

  }



}


export default Button