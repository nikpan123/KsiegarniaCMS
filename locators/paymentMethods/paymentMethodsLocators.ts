import { commonLocators } from '../commonLocators';

export const paymentMethodsLocators = {
  menu: {
    href1: 'a[href="https://cms-ksiegarnia.gwodev.pl/payment-methods/new/paypal_express_checkout"]',
    href2: 'a[href="https://cms-ksiegarnia.gwodev.pl/payment-methods/new/stripe_checkout"]',
    href3: 'a[href="https://cms-ksiegarnia.gwodev.pl/payment-methods/new/offline"]',
    href4: 'a[href="https://cms-ksiegarnia.gwodev.pl/payment-methods/new/sylius.pay_pal"]',
    href5: 'a[href="https://cms-ksiegarnia.gwodev.pl/payment-methods/new/payu"]',
  },  
  filters: {
    search: commonLocators.filters.search,
    enabled: commonLocators.filters.enabled,
  },
  columns: {
    checkbox: commonLocators.columns.checkbox,
    position: commonLocators.columns.position,
    code: commonLocators.columns.code,
    name: commonLocators.columns.name,
    gateway: ".sylius-table-column-gateway",
    enabledColumn: commonLocators.columns.enabled,
    actions: commonLocators.columns.actions,
  },
  specificButtons: {
    payPal: '.ui.labeled.buttons.icon.top.floating.button.yellow'
  }
};