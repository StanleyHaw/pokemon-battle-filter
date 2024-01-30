import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { MEDIA_QUERY_MOBILE } from '../constants/breakpoint';

const DeletedButton = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 99px;
  background: ${(props) => props.theme.defaultGrey800};
  color: ${(props) => props.theme.defaultWhite};

  & i {
    font-size: 14px;
  }

  &:hover {
    background: ${(props) => props.theme.defaultRed};
    cursor: pointer;
  }

  &:active {
    background: ${(props) => darken(0.2, props.theme.defaultRed)};
  }
`;

const ClearButton = styled.button`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;

  & i {
    font-size: 16px;
    color: ${(props) => props.theme.defaultWhite};
  }

  &:hover {
    background: ${(props) => props.theme.defaultWhite};
    border-radius: 6px;
    cursor: pointer;

    & i {
      color: ${(props) => props.theme.defaultRed};
    }
  }

  &:active {
    background: ${(props) => props.theme.defaultGrey200};
  }
`;

const OptionElement = styled.li`
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background: ${(props) => props.theme.defaultWhite};
  width: auto;
  height: 30px;
  padding: 0 8px;
  border: 2px ${(props) => `${props.$borderColor}`} solid;
  border-radius: 8px;
  flex-grow: 1;
  flex-wrap: nowrap;
  white-space: nowrap;
`;

const OptionsWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 8px;
  border-radius: 8px;
  overflow-x: auto;
  // HACK: SpeciesFilter should be hidden in FilterDisplay, and only effect in PokemonFilter.
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TitleElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  height: 30px;
  padding-left: 6px;
  padding-right: 2px;
  min-width: 120px;
  width: auto;
  background: ${(props) => `${props.color}`};
  color: ${(props) => props.theme.defaultWhite};

  ${MEDIA_QUERY_MOBILE} {
    display: none;
  }
`;

const ElementWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${(props) => (props.$isFitWrapper ? '100%' : 'auto')};
`;

function FilterElement({ options, title, color, isFitWrapper }) {
  const DEFAULT_OPTIONS = ['All Types', 'All Abilities', 'Default'];

  const renderOptionElements = () => {
    return options.map((option) => {
      const isDefaultOption = DEFAULT_OPTIONS.includes(option.content);

      return (
        <OptionElement key={option.content} $borderColor={color}>
          <p>{option.content}</p>
          {!isDefaultOption && (
            <DeletedButton>
              <i className="fa-solid fa-xmark"></i>
            </DeletedButton>
          )}
        </OptionElement>
      );
    });
  };

  return (
    <ElementWrapper $isFitWrapper={isFitWrapper}>
      <TitleElement color={color}>
        <h5>{title}</h5>
        <ClearButton>
          <i className="fa-solid fa-eraser"></i>
        </ClearButton>
      </TitleElement>
      <OptionsWrapper>{renderOptionElements()}</OptionsWrapper>
    </ElementWrapper>
  );
}

export default FilterElement;