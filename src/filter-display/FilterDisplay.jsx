import React from 'react';
import styled from 'styled-components';
import Filter from '../component/Filter';
import FilterElement from '../component/FilterElement';
import { speciesFilterData, pokemonFilterData } from './filter-display-data';

const FilterDisplayContainer = styled.div`
  display: grid;
  grid-template-rows: 84px;
  grid-column-gap: 20px;
  grid-row-gap: 16px;
  font-size: 12px;
  margin-bottom: 16px;
  grid-template-columns: 408px calc(100% - 408px - 20px - 82px - 20px) 82px;
`;

function FilterDisplay() {
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
    </FilterDisplayContainer>
  );
}

export default FilterDisplay;
