import React from 'react'
import Container from '../Container/Container'
import Button from '../Button/Button'
import H2 from '../H2/H2'
import './Landing.css'
  
export default function Landing() {
  return (
    <Container>
        <div className='LayoutLanding'>
            <h3>Hello World, </h3>
            <h1>I'm Fabricio Robles R.</h1>
            <H2 style={{color: '#aaa'}}>
                | Full Stack Developer | Python Developer |
            </H2>
            <Button>More about me</Button>
        </div>

    </Container>
  )
}
