import { commonLocators } from '../commonLocators';

export const inventoryLocators = {
  filters: {
    code: commonLocators.filters.code,
    name: commonLocators.filters.name,
    onHand: "#criteria_on_hand_value",
  },
  columns: {
    checkbox: commonLocators.columns.checkbox,
    nameColumn: commonLocators.columns.name,
    codeColumn: commonLocators.columns.code,
    inventory: commonLocators.columns.inventory,
    actions: commonLocators.columns.actions,
  },
};