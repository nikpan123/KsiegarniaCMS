import { commonLocators } from "../commonLocators";

export const promotionsLocators = {
  filters: {
    search: commonLocators.filters.search,
    coupon: "#criteria_couponBased",
    couponCode: "#criteria_coupon_code_value"
  },
  columns: {
    checkbox: commonLocators.columns.checkbox,
    priority: commonLocators.columns.priority,
    code: commonLocators.columns.code,
    name: commonLocators.columns.name,
    couponBased: ".sylius-table-column-couponBased",
    usage: ".sylius-table-column-usage",
    personOrdering: ".sylius-table-column-personOrdering",
    actions: commonLocators.columns.actions,
  },
};