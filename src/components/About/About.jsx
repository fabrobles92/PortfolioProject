import React from 'react'
import Container from '../Container/Container'
import H2 from '../H2/H2'
import './About.css'

function About() {
  return (
    <Container>
        <div className='AboutLayout'>
            <H2 style={{color: 'orange'}}>About Me</H2>
            <div className="AboutBody">                
                <H2>Lorem ipsum dolor sit amet. Est quibusdam voluptas cum voluptas suscipit cum nihil nihil nam totam voluptas qui consequatur nemo aut impedit asperiores 33 corrupti nihil. Qui velit neque nam incidunt dolor vel itaque molestiae ut commodi dignissimosLorem ipsum dolor sit amet. Est quibusdam voluptas cum voluptas suscipit cum nihil nihil nam totam voluptas qui consequatur nemo aut impedit asperiores 33 corrupti nihil. Qui velit neque nam incidunt dolor vel itaque molestiae ut commodi dignissimos</H2>    
                <img src='/img/Yo.jpg' className='AboutPicture'/>
            </div>
        </div>
    </Container>
  )
}

export default About