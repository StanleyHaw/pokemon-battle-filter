import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { MEDIA_QUERY_MOBILE } from '../constants/breakpoint';

const SearchBarWrapper = styled.label`
  position: relative;

  @media screen and (max-width: ${MEDIA_QUERY_MOBILE}) {
    grid-column: 1 / span 2;
    grid-row: 3;
  }
`;

const InputBar = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 12px;
  padding-left: 12px;
  font-size: 16px;
  background: ${(props) => props.theme.defaultGrey500};
  color: ${(props) => props.theme.defaultWhite};

  &:focus {
    outline: 2px ${(props) => props.theme.defaultBlue} solid;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  border-radius: 8px;

  & i {
    color: ${(props) => lighten(0.2, props.theme.defaultBlue)};
  }

  &:hover {
    background: ${(props) => props.theme.defaultGrey600};
    cursor: pointer;
  }

  &:active {
    background: ${(props) => props.theme.defaultGrey700};
    cursor: pointer;
  }
`;

function SearchBar({ placeholder }) {
  return (
    <SearchBarWrapper>
      <InputBar type="text" placeholder={placeholder} />
      <SearchButton>
        <i className="fa-solid fa-magnifying-glass"></i>
      </SearchButton>
    </SearchBarWrapper>
  );
}

export default SearchBar;
