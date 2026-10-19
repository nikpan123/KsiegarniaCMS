import { commonLocators } from '../commonLocators';

export const taxCategoriesLocators = {
  filters: {
    search: commonLocators.filters.search,
  },
  columns: {
    checkbox: commonLocators.columns.checkbox,
    code: commonLocators.columns.code,
    nameAndDescription: ".sylius-table-column-nameAndDescription",
    actions: commonLocators.columns.actions,
  },
};