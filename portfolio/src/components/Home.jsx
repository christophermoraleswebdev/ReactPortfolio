import React from "react"
import { motion } from 'framer-motion'

const Home = () => {
  return (
      <motion.div 
            className="home-container"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ ease: "easeOut", duration: .75 }}
      >
            <div className="row">
                  <div className="home-col-1">
                        <p className="home-title">Full-Stack Developer | Software Engineer</p>
                        <h1>Hi, I'm Chris Morales</h1>
                        <p className="home-description">
                              Welcome to my portfolio! I'm a passionate Software Engineer with a background in education and finance. 
                        </p>
                        <div className="tech-stack">
                              <h2>Technologies Used:</h2>
                              <div className="tech-icons">
                                    <i class="fa-solid fa-code"></i>
                                    <i class="fa-brands fa-html5"></i>
                                    <i class="fa-brands fa-css3-alt"></i>
                                    <i class="fa-brands fa-js"></i>
                                    <i class="fa-brands fa-react"></i>
                                    <i class="fa-brands fa-node-js"></i>
                                    <i class="fa-solid fa-code"></i>
                              </div>
                        </div>
                  <div className="tech-stack">
                        <h2>Back-End Database Tech Used: </h2>
                        <div className="tech-icons">
                              <img className="icon-mongodb" src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" />
                              <img className="icon-expressjs" src="https://miro.medium.com/v2/resize:fit:1400/1*f7ztMaMM0etsFHpEfkdiwA.png"  />
                              <img className="icon-mongoose" src="https://ih1.redbubble.net/image.438912065.6243/flat,1000x1000,075,f.u3.jpg" />
                              <img className="icon-react-router" src="https://cdn-media-1.freecodecamp.org/images/1*TKvlTeNqtkp1s-eVB5Hrvg@2x.png" />
                        </div>
                  </div>
                  </div>
                  <div className="home-col-2">
                        <img src="src/assets/aboutMe.jpg"/>
                        <div id="home-icons" class="social-icons">
                              <a href="https://github.com/christophermoraleswebdev" target="_blank"><i class="fa-brands fa-github fa-lg"></i></a>
                              <a href="https://www.linkedin.com/in/christopher-moralesse/" target="_blank"><i class="fa-brands fa-linkedin fa-lg"></i></a>
                              <a href="https://docs.google.com/document/d/1qO68bZuLZ0ftlELrCv_DMlp9S5dAp8oJNBVvcyPvWfo/edit?usp=sharing" target="_blank">
                                    <button class="resume-button">View Resume</button>
                              </a>
                        </div>
                  </div>
            </div>

            
      </motion.div>
  )
}

export default Home