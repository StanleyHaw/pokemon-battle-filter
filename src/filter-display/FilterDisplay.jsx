import React from 'react';
import styled from 'styled-components';
import FilterElement from '../component/FilterElement';
import FilterElementsContainer from '../component/Filter';
import SearchBar from '../component/SearchBar';
import ToggleButton from '../component/ToggleButton';
import { MEDIA_QUERY_TABLET, MEDIA_QUERY_MOBILE } from '../constants/breakpoint';
import themeColor from '../styles/theme-color';

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

const pokemonFilterDummyData = [
  {
    id: 'pokemonFilter',
    title: 'Pokémon Filter',
    color: themeColor.defaultGrey500,
    options: [
      { content: 'Valid in SV' },
      { content: 'Pokédex of Teal Mask' },
      { content: 'Pokédex of Indigo Disk' },
      { content: 'Exclude Restricted Legendary' },
      { content: 'Exclude Mythical' }
    ]
  }
];

const speciesFilterDummyData = [
  {
    id: 'typesFilter',
    title: 'Types Filter',
    color: themeColor.optionColorRed,
    options: [{ content: 'All Types' }, { content: 'All combinations for selected' }]
  },
  {
    id: 'abilitiesFilter',
    title: 'Abilities Filter',
    color: themeColor.optionColorOrange,
    options: [{ content: 'All Abilities' }]
  },
  {
    id: 'baseStatsFilter',
    title: 'Base Stats Filter',
    color: themeColor.optionColorGreen,
    options: [{ content: 'ATK below 60' }, { content: 'SPE below 80' }]
  },
  {
    id: 'movesFilter',
    title: 'Moves Filter',
    color: themeColor.optionColorPurple,
    options: [
      { content: 'Sucker Punch' },
      { content: 'Parting Shot' },
      { content: 'Follow Me' },
      { content: 'Only can learn the selected moves' }
    ]
  }
];

const contentViewDummyToggle = [
  {
    id: 'cardLayout',
    content: `<i class="fa-solid fa-table-cells-large"></i>`
  },
  {
    id: 'listLayout',
    content: `<i class="fa-solid fa-table-list"></i>`
  }
];

function FilterDisplay({ resultAmount = 100 }) {
  const isFitWrapper = true;
  const renderFilterElements = (filterData, isFitWrapper) => {
    return filterData.map(({ id, options, title, color }) => (
      <FilterElement key={id} options={options} title={title} color={color} isFitWrapper={isFitWrapper} />
    ));
  };

  return (
    <FilterDisplayContainer>
      <FilterElementsContainer>{renderFilterElements(pokemonFilterDummyData, isFitWrapper)}</FilterElementsContainer>
      <FilterElementsContainer>{renderFilterElements(speciesFilterDummyData, !isFitWrapper)}</FilterElementsContainer>
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
      <ToggleButton buttons={contentViewDummyToggle} />
    </FilterDisplayContainer>
  );
}

export default FilterDisplay;
