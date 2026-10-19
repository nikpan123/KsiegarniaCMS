import { commonLocators } from '../commonLocators';

export const usersLocators = {
  filters: {
    search: commonLocators.filters.search,
    enabled: commonLocators.filters.enabled,
  },
  columns: {
    checkbox: commonLocators.columns.checkbox,
    firstName: commonLocators.columns.firstNameColumn,
    lastName: commonLocators.columns.lastNameColumn,
    username: ".sylius-table-column-username",
    email: commonLocators.columns.emailColumn,
    createdAt: commonLocators.columns.createdAt,
    enabledColumn: commonLocators.columns.enabled,
    actions: commonLocators.columns.actions,
  },
};