import { commonLocators } from '../commonLocators';

export const shippingMethodsLocators = {
  filters: {
    search: commonLocators.filters.search,
    enabled: commonLocators.filters.enabled,
    archival: "#criteria_archival",
  },
  columns: {
    checkbox: commonLocators.columns.checkbox,
    position: commonLocators.columns.position,
    code: commonLocators.columns.code,
    name: commonLocators.columns.name,
    zone: commonLocators.columns.zone,
    enabledColumn: commonLocators.columns.enabled,
    actions: commonLocators.columns.actions,
  },
};