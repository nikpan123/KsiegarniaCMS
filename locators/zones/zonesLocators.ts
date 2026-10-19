import { baseZonesLocators } from "../baseZonesLocators";
import { commonLocators } from "../commonLocators";

export const zonesLocators = {
  ...baseZonesLocators,
  menu: {
    href1: 'a[href="/zones/country/new"]',
    href2: 'a[href="/zones/province/new"]',
    href3: 'a[href="/zones/zone/new"]',
  },
  filters: {
    name: commonLocators.filters.name,
    code: commonLocators.filters.code,
  },
  columns: {
    checkbox: commonLocators.columns.checkbox,
    codeColumn: commonLocators.columns.code,
    nameColumn: commonLocators.columns.name,
    type: commonLocators.columns.type,
    actions: commonLocators.columns.actions,
  },
};
