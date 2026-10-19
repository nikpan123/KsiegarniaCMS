import { baseProductAttributesLocators } from "../baseProductAttributesLocators";
import { commonLocators } from "../commonLocators";

export const newProductAttributesDatetimeLocators = {
  ...baseProductAttributesLocators,
  form: {
    ...baseProductAttributesLocators.form,
    format: commonLocators.form.format,
  },
};
