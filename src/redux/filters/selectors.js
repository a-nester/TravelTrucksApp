import { createSelector } from 'reselect';

export const selectFilters = createSelector(
  state => state.filters,
  filters => {
    return {
      ...filters,
      ...filters.equipment,
    };
  }
);
