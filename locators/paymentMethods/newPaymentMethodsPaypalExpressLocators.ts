import { basePaymentMethodsLocators } from "../basePaymentMethodsLocators";

export const newPaymentMethodsPaypalExpressLocators = {
  ...basePaymentMethodsLocators,
  form: {
    ...basePaymentMethodsLocators.form,
    factoryName: "#sylius_payment_method_gatewayConfig_factoryName",
    userName: "#sylius_payment_method_gatewayConfig_config_username",
    password: "#sylius_payment_method_gatewayConfig_config_password",
    signature: "#sylius_payment_method_gatewayConfig_config_signature",
    sandbox: "#sylius_payment_method_gatewayConfig_config_sandbox",
  },
};
