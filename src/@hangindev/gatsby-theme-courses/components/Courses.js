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
        <SEO title="安迪的 PRO 課程" />
        <Wrapper>
          <CoursesHeader />
          <h3>線上課程</h3>
          <CoursesList />
          <CoursesFooter />
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
      </Helmet>
    </>
  );
}

export default Courses;
