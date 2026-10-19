import { commonLocators } from "../commonLocators";

export const countriesLocators = {
  filters: {
    code: commonLocators.filters.code,
    enabled: commonLocators.filters.enabled,
  },
  columns: {
    checkbox: commonLocators.columns.checkbox,
    codeColumn: commonLocators.columns.code,
    name: commonLocators.columns.name,
    enabledColumn: commonLocators.columns.enabled,
    actions: commonLocators.columns.actions,
  },
};