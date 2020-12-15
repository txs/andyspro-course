import React from 'react';
import styled from 'styled-components';
import ClassroomTitle from '@hangindev/gatsby-theme-courses/src/components/ClassroomTitle';
import ClassroomMedia from '@hangindev/gatsby-theme-courses/src/components/ClassroomMedia';
import ClassroomNote from '@hangindev/gatsby-theme-courses/src/components/ClassroomNote';
import VideoSelector from '@hangindev/gatsby-theme-courses/src/components/VideoSelector';

const Wrapper = styled.section`
  padding: 2rem 1rem;
  ${({ theme }) => `
    ${theme.media.desktop} {
      padding: 3rem 1rem;
    }
  `}
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => `
    ${theme.media.desktop} {
      flex-direction: row;
    }
  `}
`;
const MediaWrapper = styled.div`
  flex: 1;
  position: relative;
  margin-bottom: 1rem;
  ${({ theme }) => `
    ${theme.media.desktop} {
      margin-bottom:0;
    }
  `}
`;

function Classroom({ className }) {
    return (
        <Wrapper className={className}>
            <ClassroomTitle />
            <Top>
                <MediaWrapper>
                    <ClassroomMedia />
                </MediaWrapper>
                <VideoSelector />
            </Top>
            <ClassroomNote />
        </Wrapper>
    );
}

export default Classroom;
