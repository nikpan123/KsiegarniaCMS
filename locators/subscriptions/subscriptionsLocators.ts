import { commonLocators } from "../commonLocators";

export const subscriptionsLocators = {
  filters: {
    name: commonLocators.filters.name,
    code: commonLocators.filters.code,
    email: commonLocators.filters.email,
    dateFrom: "#criteria_created_at_from_date",
    timeFrom: "#criteria_created_at_from_time",
    dateTo: "#criteria_created_at_to_date",
    timeTo: "#criteria_created_at_to_time",
    notify: "#criteria_notify",
  },
  columns: {
    checkbox: commonLocators.columns.checkbox,
    image: commonLocators.columns.image,
    variantCode: ".sylius-table-column-product_variant_code",
    nameColumn: commonLocators.columns.name,
    emailColumn: commonLocators.columns.emailColumn,
    createdAt: ".sylius-table-column-created_at",
    notifyColumn: ".sylius-table-column-notify",
    actions: commonLocators.columns.actions,
  },
};
