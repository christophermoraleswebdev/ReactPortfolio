import { useForm, ValidationError } from '@formspree/react';

const ContactMe = () => {
  const [state, handleSubmit] = useForm("meqboqwa");
  if (state.succeeded) {
      return <p>Thank you for your interest! 😀</p>;
  }
  
  return (
    <div className="contact-container">
      <div className="row">
        <div className="contact-left">
          <h1 className="sub-title">Contact Me</h1>
          <h3>Email</h3>
          <a className="contact-email" href="mailto:christopher.moraleswebdev@gmail.com">christopher.moraleswebdev@gmail.com</a>
          <h3>Phone #</h3>
          <a className="contact-phone" href="tel:+19562197290">(956) 219-7290</a>
          <div className="social-icons">
            <a href="https://github.com/christophermoraleswebdev" target="_blank"><i className="fa-brands fa-github fa-lg"></i></a>
            <a href="https://www.linkedin.com/in/christopher-moralesse/" target="_blank"><i className="fa-brands fa-linkedin fa-lg"></i></a>
          </div>
          <a href="https://docs.google.com/document/d/1LdG58ZGiaCBITNQEHK9Nn0pepCMqLBQuo89YNxEpL9M/edit?usp=sharing" target="_blank" className="btn resume-btn">Resume</a>
        </div>
        <div className="contact-right">
        <form onSubmit={handleSubmit} className='form'>
          <input
            id="name"
            type="text" 
            name="name"
            placeholder='Name'
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
          <input
            placeholder="Email..."
            required
            id="email"
            type="email" 
            name="email"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder='Your Message...'
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting} className='btn'>
            Submit
          </button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
