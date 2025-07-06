import ProjectCard from './ProjectCard'
import devProjects from '../data/devProjects';


function DevSection() {
  return (
    
    <div>

<h2>Check out some of my work:</h2>

      {devProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}


export default DevSection;
