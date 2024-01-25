import React from 'react';
import styled from 'styled-components';

const StyledMainTitle = styled.div`
  margin: 24px auto;

  & h1 {
    text-align: center;
    letter-spacing: 1px;
    color: ${(props) => props.theme.defaultWhite};
  }
`;

function MainTitle() {
  return (
    <StyledMainTitle>
      <h1>寶可夢篩選搜尋器</h1>
    </StyledMainTitle>
  );
}

export default MainTitle;
