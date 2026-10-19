import { commonLocators } from "../commonLocators";

export const shipmentLocators = {
  filters: {
    state: commonLocators.filters.state,
    channel: commonLocators.filters.channel,
    shippingMethod: "#criteria_method",
  },
  columns: {
    checkbox: commonLocators.columns.checkbox,
    date: commonLocators.columns.createdAt,
    shippedAt: ".sylius-table-column-shippedAt",
    order: commonLocators.columns.orderId,
    channelColumn: commonLocators.columns.channelColumn,
    stateColumn: commonLocators.columns.state,
    actions: commonLocators.columns.actions,
  },
};