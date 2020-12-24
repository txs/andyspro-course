import React from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { usePageValue } from '../context/PageContext';
import Link from './Link'
import ReactDOMServer from 'react-dom/server';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Keyboard, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './ClassroomNote.css'



// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Keyboard, Mousewheel]);

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.noteMaxWidth};
  margin: 0 auto;
  
`;

const SwipterFull = styled.div`
// width: 100vw;
height: 400px;
paddidng: 30px;
margin-top: 30px;
margin-bottom: 60px;
`;
const SwiperWrapper = styled.div`
  width: 100vw;
  margin: 0 auto;
  position: absolute;
  left:0;
  height: 300px;
`;

const SwiperHeader = styled.h3`
  text-align: center;
  margin: 0;
  margin-bottom: 340px;
  margin-top: -356px;
`;
const DocHeader = styled.h3`
  text-align: center;
  margin: 0;
  padding-top:15px;
`;


// We use it like this cause the renderToStaticMarkup doesn't like style components
const StyledLink = styled(Link)`
  // color: ${({ theme }) => theme.colors.primary700}
  color: '#1976D2'
`


// Testing putting pre into section and code into textarea for markdown for reveal.js https://revealjs.com/markdown/
const rsection = styled.section.attrs(props => ({
  "data-markdown": props.type || ''
  // Every <Button /> will now have type="button" as default
}))`
`;



function Section({ className, children }) {
  return (
    <>
      ---
    </>
  )
}


function ClassroomNote({ className }) {
  const { currentCourse, currentLesson } = usePageValue();
  const mdxBody =
    currentLesson && currentLesson.body
      ? currentLesson.body
      : currentCourse.body;
  // console.log(mdxBody);

  const mdxHtml = ReactDOMServer.renderToStaticMarkup(
    <MDXProvider
      components={{
        // Map the HTML elements to React components
        a: StyledLink,
        hr: Section
      }}
    >
      <MDXRenderer>{mdxBody}</MDXRenderer>
    </MDXProvider>
  ).split('---')





  return (
    <MDXProvider
      components={{
        // Map the HTML elements to React components
        a: StyledLink
      }}
    >
      {currentLesson ?
        <SwipterFull>
          <SwiperWrapper>
            <Swiper
              // FIX this later, the pagination died after build into static!
              // pagination={{
              //   clickable: true,
              //   type: 'fraction',
              // }}

              slidesPerView='auto'
              centeredSlides='true'
              spaceBetween={50}

              navigation

              keyboard={{
                enabled: true,
                onlyInViewport: true,
              }}
              mousewheel={{ enabled: true, forceToAxis: true }}
            >
              <SwiperHeader className={className}>簡報</SwiperHeader>

              {mdxHtml.map((child) =>
                <SwiperSlide dangerouslySetInnerHTML={{ __html: child }} />
              )}
            </Swiper>
          </SwiperWrapper>
        </SwipterFull>
        : <></>}

      <Wrapper className={className}>
        <DocHeader className={className}>講義</DocHeader>
        {mdxBody && <MDXRenderer>{mdxBody}</MDXRenderer>}
      </Wrapper>
      {/* <section data-markdown="">
        <textarea data-template=""> */}

      {/* </textarea>
      </section> */}
      {/* <RevealJS plugins={[RevealHighlight]}>
        <Slide>
          <H size="1">Hello, World!</H>
        </Slide>
      </RevealJS> */}

    </MDXProvider>

  );
}

export default ClassroomNote;
