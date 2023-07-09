import shouldIBuyImage from '../assets/Should I Buy.png'
import quoteGenerator from '../assets/quoteGenerator.png'
import samplePortfolioImage from '../assets/Sample Portfolio.png'
import weatherApi from '../assets/Weather API.png'
import devConnect from '../assets/DevConnect.png'
import reactNucamp from '../assets/reactNucamp.png'
import { motion } from 'framer-motion'

const projectData = [
  { id: 1, title: 'DevConnect', imageUrl: devConnect, siteLink: 'https://www.youtube.com/watch?v=inoaW9zMyDI&t=15s', technologies: 'HTML | CSS | JavaScript | Axios | MongoDB | ExpressJS | Mongoose' },
  { id: 2, title: 'Should I Buy', imageUrl: shouldIBuyImage, siteLink: 'https://should-i-buy.netlify.app/', technologies: 'HTML | CSS | JavaScript | Axios' },
  { id: 3, title: 'Sample Portfolio', imageUrl: samplePortfolioImage, siteLink: 'https://sample-portfolio-christopher-morales.netlify.app/#', technologies: 'HTML | CSS | JavaScript' },
  { id: 4, title: 'Weather App', imageUrl: weatherApi, siteLink: 'https://weatherapichristophermorales.netlify.app/', technologies: 'HTML | CSS | JavaScript | Axios' },
  { id: 5, title: 'React Nucamp', imageUrl: reactNucamp, siteLink: 'https://react-nucamp-project.firebaseapp.com/', technologies: 'React | SASS | Firebase Deployment' },
  { id: 6, title: 'Quote Generator', imageUrl: quoteGenerator, siteLink: 'https://christophermoraleswebdev-quotes.netlify.app/', technologies: 'HTML | CSS | JavaScript | Axios' },
]

const Projects = () => {
  return (
    <motion.div 
      className='projects'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{ ease: "easeOut", duration: .75 }}
    >
      <h2>Projects</h2>
      <div className="gallery">
        {projectData.map((project) => (
          <div key={project.id} className="gallery-item">
            <a href={project.siteLink} target='_blank'><img src={project.imageUrl} alt={project.title} /></a>
            <h4>{project.title}</h4>
            <p className='technologies'>{project.technologies}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects