import { commonLocators } from '../commonLocators';

export const exchangeRatesLocators = {
  filters: {
    currency: "#criteria_currency",
  },
  columns:{
    checkbox: commonLocators.columns.checkbox,
    sourceCurrency: ".sylius-table-column-sourceCurrency",
    targetCurrency: ".sylius-table-column-targetCurrency",
    ratio: ".sylius-table-column-ratio",
    actions: commonLocators.columns.actions,
  },
};