import React from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { usePageValue } from '../context/PageContext';
import Link from './Link'

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.noteMaxWidth};
  margin: 0 auto;
  
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary700}
`

function ClassroomNote({ className }) {
  const { currentCourse, currentLesson } = usePageValue();
  const mdxBody =
    currentLesson && currentLesson.body
      ? currentLesson.body
      : currentCourse.body;
  return (
    <MDXProvider
      components={{
        // Map the HTML elements to React components
        a: StyledLink
      }}
    >
      <Wrapper className={className}>
        {mdxBody && <MDXRenderer>{mdxBody}</MDXRenderer>}
      </Wrapper>
    </MDXProvider>
  );
}

export default ClassroomNote;
