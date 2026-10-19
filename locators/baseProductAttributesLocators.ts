import { commonLocators } from "./commonLocators";

export const baseProductAttributesLocators = {
  form: {
    code: "#sylius_product_attribute_code",
    position: "#sylius_product_attribute_position",
    type: "#sylius_product_attribute_type",
    translatable: "#sylius_product_attribute_translatable",
    translationName: "#sylius_product_attribute_translations_pl_PL_name",
    },
  buttons: commonLocators.buttons,
};
