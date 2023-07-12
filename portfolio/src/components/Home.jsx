import React from "react"
import Typewriter from 'typewriter-effect'

const Home = () => {
      

  return (
      <div className="home-container">
            <div className="row">
                  <div className="home-col-1">
                        <p className="home-title">Full-Stack Developer | Software Engineer</p>
                        <h1>
                              Hi,  
                              <span className="typewriter">
                                    <Typewriter
                                          options={{
                                          strings: ["I'm Chris Morales", " I'm a Developer", "I'm a Designer", "I'm a Team Player"],
                                          autoStart: true,
                                          loop: true,
                                          delay: 100,
                                          }}
                                    />
                              </span>
                        </h1>
                        <p className="home-description">
                        I'm a passionate Software Engineer with expertise in creating user-friendly websites and applications. Combining my educational and financial background, I bring a fresh perspective to problem-solving and strive to make a significant impact in cutting-edge software engineering.
                        </p><br />
                        <p> <span className="home-technologies">Front-End Technologies:</span> 
                        HTML || CSS || Javascript || React || Next.js || Bootstrap.
                        </p><br />
                        <p><span className="home-technologies">Back-End Technologies:</span> 
                        Python || Node.js || Django || MongoDB || Mongoose || PostgreSQL || Express.js
                        </p><br />
                        <p>
                        <span className="home-technologies">Design Software:</span> 
                        Figma
                        </p>
                        {/* <div className="tech-stack">
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
                        </div> */}
                  </div>
                  <div className="home-col-2">
                        <div className="homeImg-container">
                              <img src="src/assets/aboutMe.png"/>
                        </div>
                        <div className="icons-container">
                              <div class="home-icons">
                                    <a href="https://github.com/christophermoraleswebdev" target="_blank"><i class="fa-brands fa-github fa-lg"></i></a>
                                    <a href="https://www.linkedin.com/in/christopher-moralesse/" target="_blank"><i class="fa-brands fa-linkedin fa-lg"></i></a>
                              </div>
                              <div className="resumeButton-container">
                                    <a href="https://docs.google.com/document/d/1qO68bZuLZ0ftlELrCv_DMlp9S5dAp8oJNBVvcyPvWfo/edit?usp=sharing" target="_blank">
                                          <button class="resume-button">View Resume</button>
                                    </a>
                              </div>
                        </div>
                  </div>
            </div>

            
      </div>
  )
}

export default Home