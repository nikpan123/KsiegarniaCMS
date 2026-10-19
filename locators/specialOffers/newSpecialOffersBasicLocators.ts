import { baseSpecialOffersLocators } from '../baseSpecialOffersLocators';

export const newSpecialOffersBasicLocators = {
  ...baseSpecialOffersLocators,
  formFields: {
    ...baseSpecialOffersLocators.formFields,
    minimumProductsQuantity: '#special_offer_configuration_minimumProductsQuantity',
    minimumCopiesQuantity: '#special_offer_configuration_minimumCopiesQuantity',
  },
};