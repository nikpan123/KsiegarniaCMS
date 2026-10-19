import { commonLocators } from "../commonLocators";

export const announcementsLocators = {
  filters: {
    search: commonLocators.filters.search,
  },
  columns: {
    text: ".sylius-table-column-text",
    dateFrom: ".sylius-table-column-dateFrom",
    dateTo: ".sylius-table-column-dateTo",
    actions: commonLocators.columns.actions,
  },
};