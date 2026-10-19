import { commonLocators } from "../commonLocators";

export const customersLocators = {
  filters: {
    name: "#criteria_customer_name_customer-name",
    coupon: commonLocators.filters.coupon,
  },
  columns: {
    checkbox: commonLocators.columns.checkbox,
    firstName: commonLocators.columns.firstNameColumn,
    lastName: commonLocators.columns.lastNameColumn,
    email: commonLocators.columns.emailColumn,
    createdAt: commonLocators.columns.createdAt,
    enabled: commonLocators.columns.enabled,
    verified: ".sylius-table-column-verified",
    actions: commonLocators.columns.actions,
  },
};
