import { baseProductAttributesLocators } from "../baseProductAttributesLocators";
import { commonLocators } from "../commonLocators";

export const newProductAttributesDateLocators = {
  ...baseProductAttributesLocators,
  form: {
    ...baseProductAttributesLocators.form,
    format: commonLocators.form.format,
  },
};
