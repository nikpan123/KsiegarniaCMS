import { commonLocators } from "./commonLocators";

export const basePaymentMethodsLocators = {
  form: {
    code: "#sylius_payment_method_code",
    zone: "#sylius_payment_method_zone",
    position: "#sylius_payment_method_position",
    enabled: "#sylius_payment_method_enabled",
    retail: "#sylius_payment_method_channels_0",
    empik: "#sylius_payment_method_channels_1",
    academy: "#sylius_payment_method_channels_2",
    wholesale: "#sylius_payment_method_channels_3",
    factoryName: "#sylius_payment_method_gatewayConfig_factoryName",
    name: "#sylius_payment_method_translations_pl_PL_name",
    description: "#sylius_payment_method_translations_pl_PL_description",
    instruction: "#sylius_payment_method_translations_pl_PL_instructions",
    },
  buttons: commonLocators.buttons,
  specificButtons: {
    formChooseFile: '[for="sylius_payment_method_images_0_file"]',
    formAdd: 'a.ui.labeled.icon.button[data-form-collection="add"]:has-text("Dodaj"):not(:has-text("Dodaj regułę"))',
    }
};
