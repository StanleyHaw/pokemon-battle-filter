import themeColor from '../style/theme-color';

const speciesFilterData = [
  {
    title: 'Types Filter',
    color: themeColor.optionColorRed,
    options: [{ content: 'All Types' }, { content: 'All combinations for selected' }]
  },
  {
    title: 'Abilities Filter',
    color: themeColor.optionColorOrange,
    options: [{ content: 'All Abilities' }]
  },
  {
    title: 'Base Stats Filter',
    color: themeColor.optionColorGreen,
    options: [{ content: 'ATK below 60' }, { content: 'SPE below 80' }]
  },
  {
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

const pokemonFilterData = [
  {
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

export { speciesFilterData, pokemonFilterData };
