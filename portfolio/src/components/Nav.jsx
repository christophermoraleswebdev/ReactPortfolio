import { Link } from 'react-router-dom'


const Nav = () => {
      return (
            <div className='nav-links'>
                  <h1 className='nav-logo'>Christopher Morales</h1>
                  <Link className='nav-link' to='/'>Home</Link>
                  <Link className='nav-link' to='/projects'>Projects</Link>
                  <Link className='nav-link' to='/contactMe'>Contact Me</Link>
            </div>
      )
}

export default Nav