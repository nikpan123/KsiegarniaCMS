import { basePaymentMethodsLocators } from "../basePaymentMethodsLocators";

export const newPaymentMethodsStripeLocators = {
  ...basePaymentMethodsLocators,
  form: {
    ...basePaymentMethodsLocators.form,
    factoryName: "#sylius_payment_method_gatewayConfig_factoryName",
    publishableKey: "#sylius_payment_method_gatewayConfig_config_publishable_key",
    secretKey: "#sylius_payment_method_gatewayConfig_config_secret_key",
  },
};
