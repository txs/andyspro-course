import React from 'react';
import { Link } from 'gatsby';
import moment from 'moment'
import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaLayerGroup, FaClock } from 'react-icons/fa';
import durationInLongText from '@hangindev/gatsby-theme-courses/src/utils/durationInLongText';
import PremiumRibbon from '@hangindev/gatsby-theme-courses/src/components/PremiumRibbon';
import Like from '@hangindev/gatsby-theme-courses/src/components/Like';
import { useAppValue } from '@hangindev/gatsby-theme-courses/src/context/AppContext';

const BORDER_RADIUS = '5px';
const CardWrapper = styled.div`
  flex-basis: 100%;
  max-width: 100%;
  flex-grow: 0;
  ${({ theme }) => `
    ${theme.media.tablet} {
      flex-basis: 50%;
      max-width: 50%;
    }
    ${theme.media.desktop} {
      flex-basis: 33.33%;
      max-width: 33.33%;
    }
  `}
`;
const Card = styled.div`
  position: relative;
  background: white;
  margin: 0.75rem;
  border-radius: ${BORDER_RADIUS};
  min-width: 0;
  text-decoration: none;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
`;
const CardContent = styled.div`
  padding: 1rem;
  h3 {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    line-height: 1.2;
  }
  p {
    margin: 0;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.grey700};
  }
`;
const ImgWrapper = styled.div`
  border-top-left-radius: ${BORDER_RADIUS};
  border-top-right-radius: ${BORDER_RADIUS};
  padding-bottom: 56.25%;
  position: relative;
`;
const StyledImg = styled(Img)`
  border-top-left-radius: ${BORDER_RADIUS};
  border-top-right-radius: ${BORDER_RADIUS};
  position: absolute !important;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const StyledLike = styled(Like)`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
`;

function toTWTime(secs) {
    moment.locale("zh-tw")
    return moment.utc(secs * 1000).format("H小時m分鐘");
}

const CoursePreview = ({
    id,
    title,
    slug,
    lastUpdated,
    coverImage,
    lessons,
    premium,
    className,
}) => {
    const [{ likes }, dispatch] = useAppValue();

    console.log(lessons);
    // const totalDuration = durationInLongText(
    //     lessons.reduce((pv, cv) => pv + cv.duration, 0)
    // );
    const totalDuration = toTWTime(
        lessons.reduce((pv, cv) => pv + cv.duration, 0)
    );
    return (
        <CardWrapper className={className}>
            <Card>
                <Link to={slug}>
                    <ImgWrapper>
                        <StyledImg fluid={coverImage.childImageSharp.fluid} alt={title} />
                    </ImgWrapper>
                    <CardContent>
                        <small>{lastUpdated}更新!</small>
                        <h3>{title}</h3>
                        <p>
                            <FaLayerGroup style={{ paddingTop: '4px' }} /> {lessons.length}堂課   <FaClock style={{ paddingTop: '4px' }} /> {totalDuration}
                        </p>
                    </CardContent>
                </Link>
                <StyledLike
                    onChange={liked =>
                        dispatch({
                            type: liked ? 'like' : 'unlike',
                            id,
                        })
                    }
                    liked={!!likes[id]}
                />
                {premium && <PremiumRibbon>{premium}</PremiumRibbon>}
            </Card>
        </CardWrapper>
    );
};
CoursePreview.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    lastUpdated: PropTypes.string.isRequired,
    coverImage: PropTypes.shape({
        childImageSharp: PropTypes.shape({
            fluid: PropTypes.object.isRequired,
        }),
    }),
    lessons: PropTypes.arrayOf(
        PropTypes.shape({
            duration: PropTypes.number.isRequired,
        })
    ),
    premium: PropTypes.string,
};
CoursePreview.defaultProps = {
    premium: false,
};
export default CoursePreview;
