import { baseProductAttributesLocators } from "../baseProductAttributesLocators";
import { commonLocators } from "../commonLocators";

export const newProductAttributesSelectLocators = {
  ...baseProductAttributesLocators,
  form: {
    ...baseProductAttributesLocators.form,
    multiple: "#sylius_product_attribute_configuration_multiple",
    min: commonLocators.form.min,
    max: commonLocators.form.max,
    valueKeyPrefix: "#sylius_product_attribute_configuration_valueKeyPrefix",
  },
  specificButton: {
    formAddButton: 'a.ui.labeled.icon.button:has-text("Dodaj")',
  },
};
