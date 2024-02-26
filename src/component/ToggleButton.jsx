import React, { useState } from 'react';
import styled from 'styled-components';

const OptionContainer = styled.div`
  display: flex;
  column-gap: 4px;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 4px;
  background: ${(props) => props.theme.defaultGrey700};
  border-radius: 12px;
`;

const Option = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: ${({ checked, theme }) => (checked ? `${theme.defaultBlue} 1px solid` : 'none')};
  color: ${({ checked, theme }) => (checked ? theme.defaultBlue : theme.defaultWhite)};
  background: ${({ checked, theme }) => (checked ? theme.defaultWhite : 'transparent')};

  & input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
  }

  & i {
    font-size: 18px;
  }

  &:hover {
    background: ${({ checked, theme }) => (checked ? theme.defaultWhite : theme.defaultGrey500)};
    cursor: ${({ checked }) => (checked ? 'default' : 'pointer')};
  }

  &:active {
    background: ${({ checked, theme }) => (checked ? theme.defaultWhite : theme.defaultGrey600)};
  }
`;

function OptionSelector({ options }) {
  const [selectedOption, setSelectedOption] = useState(options[0].id);

  const handleOptionChange = (id) => {
    setSelectedOption(id);
  };

  return (
    <OptionContainer>
      {options.map(({ id, name, content }) => (
        <Option key={id} checked={selectedOption === id}>
          <input type="radio" name={name} checked={selectedOption === id} onChange={() => handleOptionChange(id)} />
          <i className={content}></i>
        </Option>
      ))}
    </OptionContainer>
  );
}

export default OptionSelector;
