import { commonLocators } from '../commonLocators';

export const taxRatesLocators = {
  filters: {
    search: commonLocators.filters.search,
  },
  columns: {
    checkbox: commonLocators.columns.checkbox,
    code: commonLocators.columns.code,
    name: commonLocators.columns.name,
    zone: commonLocators.columns.zone,
    category: ".sylius-table-column-category",
    amount: commonLocators.columns.amount,
    actions: commonLocators.columns.actions,
  },
};