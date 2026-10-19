import { commonLocators } from "../commonLocators";

export const paymentsLocators = {
  filters: {
    state: commonLocators.filters.state,
    channel: commonLocators.filters.channel,
    orderType: "#criteria_order_type_by_products",
    dateFrom: commonLocators.filters.dateFrom,
    timeFrom: commonLocators.filters.timeFrom,
    dateTo: commonLocators.filters.dateTo,
    timeTo: commonLocators.filters.timeTo,
    invoice: "#criteria_order_has_invoice",
    sentToSoftLab: commonLocators.filters.sentToSoftLab,
    paymentMethod: "#criteria_payment_method_payment-method",
  },
  columns: {
    checkbox: commonLocators.columns.checkbox,
    date: commonLocators.columns.createdAt,
    order: commonLocators.columns.orderId,
    channel: commonLocators.columns.channelColumn,
    customer: commonLocators.columns.customerColumn,
    state: commonLocators.columns.state,
    itemsTotal: ".sylius-table-column-items_total",
    shipping: ".sylius-table-column-shipping_total",
    total: commonLocators.columns.total,
    amount: commonLocators.columns.amount,
    currency: commonLocators.columns.currencyCode,
    softLab: commonLocators.columns.sentToSoftLabColumn,
    actions: commonLocators.columns.actions,
  },
};
