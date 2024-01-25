import React from 'react';
import styled from 'styled-components';

const StyledMainTitle = styled.h1`
  text-align: center;
  letter-spacing: 1px;
`;

function MainTitle() {
  return <StyledMainTitle>寶可夢篩選搜尋器</StyledMainTitle>;
}

export default MainTitle;
