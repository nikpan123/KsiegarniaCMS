import { commonLocators } from "../commonLocators";

export const paidCoursesLocators = {
  filters: {
    sputnikCourseId: "#criteria_sputnikCourseId_value",
    name: commonLocators.filters.name,
    sputnikAssumptionId: "#criteria_sputnikAssumptionId_value",
    isComplete: "#criteria_isComplete",
    consultant: commonLocators.filters.consultant,
  },
  columns: {
    sputnikCourseIdColumn: ".sylius-table-column-sputnikCourseId",
    nameColumn: commonLocators.columns.name,
    sputnikAssumptionIdColumn: ".sylius-table-column-sputnikAssumptionId",
    consultantColumn: commonLocators.columns.consultantColumn,
    isCompleteColumn: ".sylius-table-column-isComplete",
    actionsColumn: commonLocators.columns.actions,
  },
};
