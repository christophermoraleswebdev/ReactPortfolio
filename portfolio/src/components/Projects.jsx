import shouldIBuyImage from '../assets/Should I Buy.png'
import quoteGenerator from '../assets/quoteGenerator.png'
import samplePortfolioImage from '../assets/Sample Portfolio.png'
import weatherApi from '../assets/Weather API.png'


const projectData = [
  { id: 1, title: 'Should I Buy', imageUrl: shouldIBuyImage, siteLink: 'https://should-i-buy.netlify.app/' },
  { id: 2, title: 'Quote Generator', imageUrl: quoteGenerator, siteLink: 'https://christophermoraleswebdev-quotes.netlify.app/' },
  { id: 3, title: 'Sample Portfolio', imageUrl: samplePortfolioImage, siteLink: 'https://sample-portfolio-christopher-morales.netlify.app/#' },
  { id: 4, title: 'Weather App', imageUrl: weatherApi, siteLink: 'https://weatherapichristophermorales.netlify.app/' },
]

const Projects = () => {
  return (
    <div className='projects'>
      <h2>Projects</h2>
      <div className="gallery">
        {projectData.map((project) => (
          <div key={project.id} className="gallery-item">
            <img src={project.imageUrl} alt={project.title} />
            <h4>{project.title} <a href={project.siteLink} target='_blank'><i class="fa-solid fa-arrow-up-right-from-square"></i></a></h4>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects