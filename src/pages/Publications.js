import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/publications/notes.md');

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Publications = () => (
  <Main
    title="Publications"
    description="Published works"
  >
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading">Publications</h2>
        </div>
      </header>
      <style>
        {`
          .post.markdown h2 {
            margin-top: 2rem;
            margin-bottom: 1rem;
          }
          .post.markdown p {
            margin-bottom: 1.5rem;
            line-height: 1.6;
          }
        `}
      </style>
      <ReactMarkdown
        components={{
          a: LinkRenderer,
        }}
        rehypePlugins={[rehypeRaw]}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  </Main>
);

export default Publications;
