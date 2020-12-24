import React from 'react';
import styled from 'styled-components';
import Layout from '@hangindev/gatsby-theme-courses/src/components/Layout';
import SEO from '@hangindev/gatsby-theme-courses/src/components/SEO';
import Classroom from './Classroom';
import { usePageValue } from '../context/PageContext';

import { Helmet } from 'react-helmet';

const Message = styled.h1`
  position: absolute;
  top: 4.8rem;
  right: 2rem;
  max-width: 90%;
  margin: 0;
  font-size: 2.5rem;
  color: red;
  line-height: 1.2;
  transform: rotate(4deg);
  @media (max-width: 450px) {
    right: 1rem;
    font-size: 1.5rem;
  }
`;

function Course() {
  const { currentCourse } = usePageValue();


  return (
    <div>
      <Layout>
        <SEO title={currentCourse.title} keywords={currentCourse.tags} />
        <Classroom />
      </Layout>
      <Helmet>
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="og:image"
          content={currentCourse.coverImage.childImageSharp.fluid.src}
        />
        <meta
          name="twitter:image"
          content={currentCourse.coverImage.childImageSharp.fluid.src}
        />
      </Helmet>
      {currentCourse.premium && (
        <Message>
          Protected Page Demo <br />
          Coming Soon!!
        </Message>
      )}
    </div>
  );
}

export default Course;




