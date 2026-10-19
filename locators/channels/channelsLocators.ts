import { commonLocators } from "../commonLocators";

export const channelsLocators = {
  filters: {
    search: commonLocators.filters.search,
    enabled: commonLocators.filters.enabled,
  },
  columns: {
    checkbox: commonLocators.columns.checkbox,
    name: ".sylius-table-column-nameAndDescription",
    code: commonLocators.columns.code,
    theme: ".sylius-table-column-themeName",
    enabledColumn: commonLocators.columns.enabled,
    actions: commonLocators.columns.actions,
  },
};