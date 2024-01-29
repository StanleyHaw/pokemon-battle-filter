import React from 'react';
import styled from 'styled-components';
import Filter from '../component/Filter';
import FilterElement from '../component/FilterElement';
import SearchBar from '../component/SearchBar';
import ToggleButton from '../component/ToggleButton';
import { speciesFilterData, pokemonFilterData } from './filter-display-data';
import { MEDIA_QUERY_TABLET, MEDIA_QUERY_MOBILE } from '../constants/breakpoint';

const FilterDisplayContainer = styled.div`
  display: grid;
  grid-template-rows: 84px;
  grid-column-gap: 20px;
  grid-row-gap: 16px;
  font-size: 12px;
  margin: 0 20px;
  margin-bottom: 16px;
  grid-template-columns: 408px calc(100% - 408px - 20px - 82px - 20px) 82px;

  ${MEDIA_QUERY_TABLET} {
    grid-template-columns: 360px calc(100% - 360px - 20px - 82px - 20px) 82px;
  }

  ${MEDIA_QUERY_MOBILE} {
    grid-template-columns: calc(100% - 94px) 82px;
    grid-template-rows: 46px;
    row-gap: 8px;
    column-gap: 12px;
    margin-bottom: 8px;
  }
`;

const MenuButton = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.defaultWhite};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: none;
  border-radius: 12px;

  & i {
    color: ${(props) => props.theme.defaultGrey700};
    font-size: 32px;
    transition: color 0.3s ease;
  }

  & .fa-angle-left {
    font-size: 24px;
  }

  &:hover {
    i {
      color: ${(props) => props.theme.defaultBlue};
    }
  }

  &:active {
    background: ${(props) => props.theme.defaultGrey200};

    & i {
      color: ${(props) => props.theme.defaultBlue};
    }
  }

  ${MEDIA_QUERY_MOBILE} {
    grid-column: 2;
    grid-row: 1 / span 2;
    height: 100%;
  }
`;

const ResultStats = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;

  p {
    padding-left: 4px;
    color: ${(props) => props.theme.defaultWhite};
    font-size: 16px;
  }
`;

function FilterDisplay({ resultAmount = 100 }) {
  return (
    <FilterDisplayContainer>
      <Filter>
        {pokemonFilterData.map((data, index) => (
          <FilterElement key={index} options={data.options} title={data.title} color={data.color} fitWrapper={true} />
        ))}
      </Filter>
      <Filter>
        {speciesFilterData.map((data, index) => (
          <FilterElement key={index} options={data.options} title={data.title} color={data.color} />
        ))}
      </Filter>
      <MenuButton>
        <i className="fa-solid fa-angle-left"></i>
        <i className="fa-solid fa-filter-circle-xmark"></i>
      </MenuButton>
      <ResultStats>
        <p>
          About {resultAmount} Pokémon {resultAmount <= 1 ? 'result' : 'results'}
        </p>
      </ResultStats>
      <SearchBar placeholder={'Enter Pokémon Name'} />
      <ToggleButton
        button1={<i className="fa-solid fa-table-cells-large"></i>}
        button2={<i className="fa-solid fa-table-list"></i>}
      />
    </FilterDisplayContainer>
  );
}

export default FilterDisplay;
