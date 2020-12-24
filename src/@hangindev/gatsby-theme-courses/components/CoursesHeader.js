import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  li {
    margin-bottom: 0.2rem;
    span {
      &:first-child {
        display: inline-block;
        width: 30px;
        text-align: center;
      }
    }
  }
`;

function CoursesHeader() {
    return (
        <header>
            {/* Override me */}
            <h1>歡迎來到 Andy 的程式語言教學課程</h1>
            <h4>這些課程提供</h4>
            <List>
                <li>
                    <span role="img" aria-label="memo">
                        📝
                </span>{' '}
                    完整的課堂資訊與筆記
                </li>
                <li>
                    <a style={{ color: '#1976D2' }} href="https://www.youtube.com/watch?v=rTkfR9GGmnw&list=PL1aVa65WLc52Aoti_Qhp0T-mgzcFskPve" target="_blank" >
                        <span role="img" aria-label="video Camera">
                            ▶️
                        </span>{' '}
                        Youtube 影音教學
                    </a>
                </li>

                <li>
                    <span role="img" aria-label="heart">
                        💖
                    </span>{' '}
                    用愛心來標記自己喜歡或是想上的課程
                </li>
            </List>

        </header>
    );
}

export default CoursesHeader;