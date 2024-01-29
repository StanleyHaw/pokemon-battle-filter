import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  position: relative;
  width: 100%;
  background: ${(props) => props.theme.defaultGrey700};
  padding: 8px;
  border-radius: 16px;
  overflow-x: hidden;
`;

const ScrollWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 8px;
  border-radius: 8px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterGroup = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 8px;
  flex-direction: row;
`;

function Filter({ children }) {
  return (
    <FilterContainer>
      <ScrollWrapper>
        <FilterGroup>{children}</FilterGroup>
      </ScrollWrapper>
    </FilterContainer>
  );
}

export default Filter;
