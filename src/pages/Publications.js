import React from 'react';
import PropTypes from 'prop-types';
import Main from '../layouts/Main';
import publicationsData from '../data/publications/publications';

const PublicationItem = ({ pub }) => (
  <div className="publication-item">
    <h3 className="publication-title">
      <a href={pub.url} target="_blank" rel="noopener noreferrer">
        {pub.title}
      </a>
    </h3>
    <div className="publication-authors">{pub.authors}</div>
    <div className="publication-venue">
      {pub.venue}
      {pub.year && `, ${pub.year}`}
      {pub.doiUrl && (
        <>
          {' · '}
          <a href={pub.doiUrl} target="_blank" rel="noopener noreferrer">
            doi:{pub.doi}
          </a>
        </>
      )}
    </div>
  </div>
);

PublicationItem.propTypes = {
  pub: PropTypes.shape({
    authors: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    doi: PropTypes.string,
    doiUrl: PropTypes.string,
    year: PropTypes.string,
  }).isRequired,
};

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
            margin-top: 3rem;
            margin-bottom: 2rem;
            text-align: center;
            font-size: 1.8em;
            font-weight: 300;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: #444;
            position: relative;
            padding-bottom: 0.5rem;
          }
          .post.markdown h2:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 2px;
            background-color: #ddd;
          }
          .post.markdown h2:first-of-type {
            margin-top: 1rem;
          }
          .publication-item {
            margin-bottom: 2rem;
          }
          .publication-title {
            font-size: 1.2em;
            font-weight: 600;
            margin: 0 0 0.5rem 0;
            line-height: 1.4;
          }
          .publication-title a {
            color: inherit;
            text-decoration: none;
          }
          .publication-title a:hover {
            text-decoration: underline;
          }
          .publication-authors {
            color: #666;
            margin-bottom: 0.25rem;
            line-height: 1.5;
          }
          .publication-venue {
            color: #888;
            font-size: 0.95em;
            line-height: 1.5;
          }
          .publication-venue a {
            color: #666;
            text-decoration: none;
          }
          .publication-venue a:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <h2>Journal Publications</h2>
      {publicationsData.journalPublications.map((pub) => (
        <PublicationItem key={pub.title} pub={pub} />
      ))}

      <h2>Master&apos;s Thesis</h2>
      {publicationsData.masterThesis.map((pub) => (
        <PublicationItem key={pub.title} pub={pub} />
      ))}

      <h2>Conference Publications</h2>
      {publicationsData.conferencePublications.map((pub) => (
        <PublicationItem key={pub.title} pub={pub} />
      ))}

      <h2>Pre-Print Publications</h2>
      {publicationsData.prePrintPublications.map((pub) => (
        <PublicationItem key={pub.title} pub={pub} />
      ))}
    </article>
  </Main>
);

export default Publications;
