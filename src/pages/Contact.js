import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Tony Davis via email at acdavis629@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: <a href="mailto:acdavis629@gmail.com">acdavis629@gmail.com</a>,</p>
        <p>or you can check out any of my links below.</p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
