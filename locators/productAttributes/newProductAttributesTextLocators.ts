import { baseProductAttributesLocators } from "../baseProductAttributesLocators";
import { commonLocators } from "../commonLocators";

export const newProductAttributesTextLocators = {
  ...baseProductAttributesLocators,
  form: {
    ...baseProductAttributesLocators.form,
    min: commonLocators.form.min,
    max: commonLocators.form.max,
  },
};
