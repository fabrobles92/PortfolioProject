import Grid from '@mui/material/Grid';
import Container from "../Container/Container";
import ProjectItem from "./ProjectItem";
import './Projects.css'
const projects = [
    {id: 1, name: 'Project', description: 'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit amet', link: 'https://www.google.com', picture: 'https://picsum.photos/2501/2500'},
    {id: 2, name: 'Project', description: 'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit amet', link: 'https://www.google.com', picture: 'https://picsum.photos/2502/2500'},
    {id: 3, name: 'Project', description: 'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit amet', link: 'https://www.google.com', picture: 'https://picsum.photos/2503/2500'},
    {id: 4, name: 'Project', description: 'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit ametipsum dolor sit amet', link: 'https://www.google.com', picture: 'https://picsum.photos/2504/2500'},
]

const Projects = () => {
  return (
    <Container>
      <div className='ProjectsLayout'>
        {projects.map((project) => (
          <ProjectItem project={project}/>
        ))}        
      </div>        
    </Container>
  )
}

export default Projects