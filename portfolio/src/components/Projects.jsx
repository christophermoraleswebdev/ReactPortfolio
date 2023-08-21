import shouldIBuyImage from '../assets/Should I Buy.png'
import quoteGenerator from '../assets/quoteGenerator.png'
import samplePortfolioImage from '../assets/Sample Portfolio.png'
import weatherApi from '../assets/Weather API.png'
import devConnect from '../assets/DevConnect.png'
import reactNucamp from '../assets/reactNucamp.png'
import projectWRX from '../assets/projectWRX.png'
import craftedCocktails from '../assets/craftedCocktails.png'
import TickitGuru from '../assets/TickitGuru.png'
import dishit from '../assets/dish-it.png'
import SouthernPro from '../assets/Southern Pro.png'
import Legacy from '../assets/Legacy.png'


const projectData1 = [
  { id: 1, title: 'Southern Pro R&C', imageUrl: SouthernPro, siteLink: 'https://sprcroofing.com/', technologies: 'React | CSS | EmailJS' },
  { id: 2, title: 'Legacy', imageUrl: Legacy, siteLink: 'https://legacy-production-9d35.up.railway.app/', technologies: 'React | CSS | EmailJS' },
  
]
const projectData = [
  { id: 1, title: 'Dish-It', imageUrl: dishit, siteLink: 'https://dish-it.up.railway.app/', technologies: 'MERN Back-end | React | React Bootstrap' },
  { id: 2, title: 'Should I Buy', imageUrl: shouldIBuyImage, siteLink: 'https://should-i-buy.netlify.app/', technologies: 'HTML | CSS | JavaScript | Axios' },
  { id: 3, title: 'ProjectWRX', imageUrl: projectWRX, siteLink: 'https://projectwrx.netlify.app/', technologies: 'MERN Stack' },
  { id: 4, title: 'Crafted Cocktails', imageUrl: craftedCocktails, siteLink: 'https://cocktails-recipes-ccm.netlify.app/', technologies: 'React | Axios | CSS' },
  { id: 5, title: 'TickitGuru', imageUrl: TickitGuru, siteLink: 'https://tickitguru.netlify.app/', technologies: 'PostgreSQL | Django | React | Bootstrap' },
  { id: 6, title: 'DevConnect', imageUrl: devConnect, siteLink: 'https://www.youtube.com/watch?v=inoaW9zMyDI&t=15s', technologies: 'MERN Stack' },
  { id: 7, title: 'React Nucamp', imageUrl: reactNucamp, siteLink: 'https://react-nucamp-project.firebaseapp.com/', technologies: 'React | SASS | Firebase' },
  { id: 8, title: 'Sample Portfolio', imageUrl: samplePortfolioImage, siteLink: 'https://sample-portfolio-christopher-morales.netlify.app/#', technologies: 'HTML | CSS | JavaScript' },
  { id: 9, title: 'Quote Generator', imageUrl: quoteGenerator, siteLink: 'https://christophermoraleswebdev-quotes.netlify.app/', technologies: 'HTML | CSS | JavaScript' },
  { id: 10, title: 'Weather App', imageUrl: weatherApi, siteLink: 'https://weatherapichristophermorales.netlify.app/', technologies: 'HTML | CSS | JavaScript | Axios' },
  
]

const Projects = () => {
  return (
    <div className='projects'>
      <h2>Professional Projects</h2>
      <p>Click on the project to be taken to the LIVE SITE</p>
      <div className="gallery">
        {projectData1.map((project) => (
          <div key={project.id} className="gallery-item">
            <a href={project.siteLink} target='_blank'><img src={project.imageUrl} alt={project.title} /></a>
            <h4>{project.title}</h4>
            <p className='technologies'>{project.technologies}</p>
          </div>
        ))}
      </div>
      <h2>Projects Built Through My Course Work</h2>
      <p>Click on the project to be taken to the LIVE SITE</p>
      <div className="gallery">
        {projectData.map((project) => (
          <div key={project.id} className="gallery-item">
            <a href={project.siteLink} target='_blank'><img src={project.imageUrl} alt={project.title} /></a>
            <h4>{project.title}</h4>
            <p className='technologies'>{project.technologies}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects