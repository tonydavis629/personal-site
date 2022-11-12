import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Tony Davis's personal website. Mechanical engineer, AI researcher, and "
    + 'life enthusiast.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome to my website!</Link></h2>
          <p>
            Browse around to get to know me, my interests, and my work.
          </p>
        </div>
      </header>
      <p> You can find personal information in <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        <a href="https://medium.com/@tdavis629">blog posts</a>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
        "Some people can read War and Peace and come away thinking it's 
        a simple adventure story. Others can read the ingredients on a 
        chewing gum wrapper and unlock the secrets of the universe."
        -Lex Luthor </p>
      <p> Source available <a href="https://github.com/tonydavis629/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
