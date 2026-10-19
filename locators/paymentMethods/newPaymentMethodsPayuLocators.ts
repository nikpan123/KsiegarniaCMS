import { basePaymentMethodsLocators } from "../basePaymentMethodsLocators";

export const newPaymentMethodsPayuLocators = {
  ...basePaymentMethodsLocators,
  form: {
    ...basePaymentMethodsLocators.form,
    environment: "#sylius_payment_method_gatewayConfig_config_environment",
    signatureKey: "#sylius_payment_method_gatewayConfig_config_signature_key",
    podId: "#sylius_payment_method_gatewayConfig_config_pos_id",
    clientId: "#sylius_payment_method_gatewayConfig_config_oauth_client_id",
    clientSecret: "#sylius_payment_method_gatewayConfig_config_oauth_client_secret",
  },
};
