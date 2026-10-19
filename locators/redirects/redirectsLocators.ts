import { commonLocators } from '../commonLocators';

export const redirectsLocators = {
  filters: {
    search: commonLocators.filters.search,
  },
  columns: {
    checkbox: commonLocators.columns.checkbox,
    source: ".sylius-table-column-source",
    destination: ".sylius-table-column-destination",
    permanent: ".sylius-table-column-permanent",
    enabled: commonLocators.columns.enabled,
    count: ".sylius-table-column-count",
    lastAccessed: ".sylius-table-column-lastAccessed",
    actions: commonLocators.columns.actions,
  },
};