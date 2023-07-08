import { motion } from 'framer-motion'

const ContactMe = () => {
  return (
    <motion.div 
      className="contact-container"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}} 
      transition={{ ease: "easeOut", duration: .75 }} 
    >
      <div className="row">
        <div className="contact-left">
          <h1 class="sub-title">Contact Me</h1>
          <h3>Email</h3>
          <a className="contact-email" href="mailto:christopher.moraleswebdev@gmail.com">christopher.moraleswebdev@gmail.com</a>
          <h3>Phone #</h3>
          <a className="contact-phone" href="tel:+19562197290">(956) 219-7290</a>
          <div class="social-icons">
            <a href="https://github.com/christophermoraleswebdev" target="_blank"><i class="fa-brands fa-github fa-lg"></i></a>
            <a href="https://www.linkedin.com/in/christopher-moralesse/" target="_blank"><i class="fa-brands fa-linkedin fa-lg"></i></a>
          </div>
          <a href="https://docs.google.com/document/d/1qO68bZuLZ0ftlELrCv_DMlp9S5dAp8oJNBVvcyPvWfo/edit?usp=sharing" target="_blank" class="btn resume-btn">Resume</a>
        </div>
        <div className="contact-right">
          <form className="form">
            <input type="text" placeholder="Your Name..." required/>
            <input type="email" placeholder="Email..." required/>
            <textarea rows="6" placeholder="Your Message"></textarea>
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactMe
