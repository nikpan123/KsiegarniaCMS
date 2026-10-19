import { commonLocators } from '../commonLocators';

export const shippingCategoriesLocators = {
  filters: {
    search: commonLocators.filters.search,
  },
  columns: {
    checkbox: commonLocators.columns.checkbox,
    code: commonLocators.columns.code,
    name: commonLocators.columns.name,
    createdAt: commonLocators.columns.createdAt,
    updatedAt: ".sylius-table-column-updatedAt",
    actions: commonLocators.columns.actions,
  },

};