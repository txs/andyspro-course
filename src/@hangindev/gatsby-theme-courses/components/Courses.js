import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Layout from '@hangindev/gatsby-theme-courses/src/components/Layout';
import SEO from '@hangindev/gatsby-theme-courses/src/components/SEO';
import CoursesList from '@hangindev/gatsby-theme-courses/src/components/CoursesList';
import CoursesHeader from './CoursesHeader';
import CoursesFooter from './CoursesFooter';
import CoverPhoto from '../../../../static/cover.jpg'


const Wrapper = styled.div`
  padding: 0 1rem;
`;

function Courses() {
  return (
    <>
      <Layout>
        <SEO title="Andy 的程式教學課程" />
        <Wrapper>
          <CoursesHeader />
          <h3>線上課程</h3>
          <CoursesList />
          <CoursesFooter />
          <h6>
            <a style={{ color: '#1976D2' }} href="https://github.com/txs/andyspro-course" target="_blank" >
              本站更新
            </a>
          </h6>
        </Wrapper>
      </Layout>
      <Helmet>
        <meta
          name="og:image"
          content={CoverPhoto}
        />
        <meta
          name="twitter:image"
          content={CoverPhoto}
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="google-site-verification"
          content="72kTs25s2uMN5NP8_yy71vXqaiRbiT9-pMGpC_aA_Ic"
        />
      </Helmet>
    </>
  );
}

export default Courses;
