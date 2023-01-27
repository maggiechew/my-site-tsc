import React from 'react'

function ContactMe() {
  return (
    <section id="contact">
        <h2>Contact Me</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <br />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </section>
  )
}

export default ContactMe
