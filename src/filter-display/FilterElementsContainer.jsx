import React from 'react';
import styled from 'styled-components';

const ElementsContainer = styled.div`
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

const ElementsGroup = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 8px;
  flex-direction: row;
`;

function FilterElementsContainer({ children }) {
  return (
    <ElementsContainer>
      <ScrollWrapper>
        <ElementsGroup>{children}</ElementsGroup>
      </ScrollWrapper>
    </ElementsContainer>
  );
}

export default FilterElementsContainer;
