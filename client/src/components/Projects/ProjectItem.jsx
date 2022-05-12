import React from 'react'
import H2 from '../H2/H2'
import Button from '../Button/Button'
import './ProjectItem.css'

function ProjectItem({project}) {
  return (
    <a className='LinkCard' href='#'>
      <div className='Card'>
        <img className='CardPicture' src={project.picture}></img>
        <div className='CardBody'>
          <text>Name</text>
          <H2>{project.description}</H2>
        </div>
      </div>
    </a>
  )
}

export default ProjectItem