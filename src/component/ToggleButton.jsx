import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 4px;
  background: ${(props) => props.theme.defaultGrey700};
  border-radius: 12px;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: ${(props) => props.theme.defaultWhite};

  & i {
    font-size: 18px;
  }

  &:hover {
    background: ${(props) => props.theme.defaultGrey500};
  }

  &:active {
    background: ${(props) => props.theme.defaultGrey600};
  }
`;

function ToggleButton({ button1, button2 }) {
  return (
    <ButtonContainer>
      <Button>{button1}</Button>
      <Button>{button2}</Button>
    </ButtonContainer>
  );
}

export default ToggleButton;
