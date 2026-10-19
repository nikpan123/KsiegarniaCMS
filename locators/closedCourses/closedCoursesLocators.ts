import { commonLocators } from "../commonLocators";

export const closedCoursesLocators = {
  filters: {
    id: "#criteria_id_value",
    subject: "#criteria_mainName_value",
    consultant: commonLocators.filters.consultant,
    enabled: commonLocators.filters.enabled,
  },
  columns: {
    idColumn: ".sylius-table-column-id",
    length: ".sylius-table-column-length",
    subjectColumn: ".sylius-table-column-mainName",
    consultantColumn: commonLocators.columns.consultantColumn,
    enabledColumn: commonLocators.columns.enabled,
    actions: commonLocators.columns.actions,
  },
};