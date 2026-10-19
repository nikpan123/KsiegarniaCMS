import { commonLocators } from "../commonLocators";

export const consultantsLocators = {
  filters: {
    email: commonLocators.filters.email,
    firstName: "#criteria_firstName_value",
    lastName: "#criteria_lastName_value",
    isSuspended: "#criteria_isSuspended",
  },
  columns: {
    firstNameColumn: commonLocators.columns.firstNameColumn,
    lastNameColumn: commonLocators.columns.lastNameColumn,
    emailColumn: commonLocators.columns.emailColumn,
    isSuspendedColumn: ".sylius-table-column-isSuspended",
    showOnSite: ".sylius-table-column-showOnSite",
    showInCourseCreation: ".sylius-table-column-showInCourseCreation",
    actions: commonLocators.columns.actions,
  },
};