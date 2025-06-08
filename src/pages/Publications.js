import React from 'react';
import PropTypes from 'prop-types';
import Main from '../layouts/Main';
import publicationsData from '../data/publications/publications';

const PublicationItem = ({ pub }) => (
  <p>
    {pub.authors}, {' '}
    <a href={pub.url} target="_blank" rel="noopener noreferrer">
      {pub.title}
    </a>
    , {pub.venue}
    {pub.doi && `, doi: ${pub.doi}`}
    {pub.doiUrl && (
      <>
        {' '}
        <a href={pub.doiUrl} target="_blank" rel="noopener noreferrer">
          [doi:{pub.doi}]
        </a>
      </>
    )}
    {pub.year && `, ${pub.year}`}.
  </p>
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
            margin-top: 2rem;
            margin-bottom: 1rem;
          }
          .post.markdown p {
            margin-bottom: 1.5rem;
            line-height: 1.6;
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
