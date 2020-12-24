import React from 'react';
import Layout from '@hangindev/gatsby-theme-courses/src/components/Layout';
import SEO from '@hangindev/gatsby-theme-courses/src/components/SEO';
import Classroom from './Classroom';
import { usePageValue } from '../context/PageContext';

function Lesson() {
    const { currentCourse, currentLesson } = usePageValue();
    console.log("currentCourse:" + currentCourse);
    console.log(currentCourse);
    console.log(currentLesson);
    return (
        <Layout>
            <SEO
                title={currentLesson.title + " | " + currentCourse.title}
                keywords={currentCourse.tags}
            />
            <Classroom />
        </Layout>
    );
}

export default Lesson;
