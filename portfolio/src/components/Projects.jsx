import shouldIBuyImage from '../assets/Should I Buy.png'
import quoteGenerator from '../assets/quoteGenerator.png'
import samplePortfolioImage from '../assets/Sample Portfolio.png'
import weatherApi from '../assets/Weather API.png'
import devConnect from '../assets/DevConnect.png'


const projectData = [
  { id: 1, title: 'DevConnect', imageUrl: devConnect, siteLink: 'https://www.youtube.com/watch?v=inoaW9zMyDI&t=15s', technologies: 'HTML | CSS | JavaScript | Axios | MongoDB | ExpressJS | Mongoose' },
  { id: 2, title: 'Quote Generator', imageUrl: quoteGenerator, siteLink: 'https://christophermoraleswebdev-quotes.netlify.app/', technologies: 'HTML | CSS | JavaScript | Axios' },
  { id: 3, title: 'Sample Portfolio', imageUrl: samplePortfolioImage, siteLink: 'https://sample-portfolio-christopher-morales.netlify.app/#', technologies: 'HTML | CSS | JavaScript' },
  { id: 4, title: 'Weather App', imageUrl: weatherApi, siteLink: 'https://weatherapichristophermorales.netlify.app/', technologies: 'HTML | CSS | JavaScript | Axios' },
  { id: 5, title: 'Should I Buy', imageUrl: shouldIBuyImage, siteLink: 'https://should-i-buy.netlify.app/', technologies: 'HTML | CSS | JavaScript | Axios' },
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
            <p className='technologies'>{project.technologies}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects