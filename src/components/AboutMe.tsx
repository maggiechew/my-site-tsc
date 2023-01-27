import React from 'react';
import maggieHS from "../MAGGIE_HS.jpg"

function AboutMe() {
  return (
    // <div>
    <section id="content">
      <h2>About Me</h2>
      <div className='content-info'>

      <img src={maggieHS} alt='Maggie, Credit: the3rdeye.ca'/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
        velit velit, id egestas risus suscipit vel. Sed auctor velit velit, id
        egestas risus suscipit vel.
      </p>{' '}
      </div>
    </section>
  );
}

export default AboutMe;
