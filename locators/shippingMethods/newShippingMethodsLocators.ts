export const newShippingMethodsLocators = {
  formFields: {
    code: "#sylius_shipping_method_code",
    zone: "#sylius_shipping_method_zone",
    position: "#sylius_shipping_method_position",
    enabled: "#sylius_shipping_method_enabled",
    // Dostępność
    retail: "#sylius_shipping_method_channels_0",
    empik: "#sylius_shipping_method_channels_1",
    academy: "#sylius_shipping_method_channels_2",
    wholesale: "#sylius_shipping_method_channels_3",
    // Wymiana kategorii
    category: "#sylius_shipping_method_category",
    categoryRequirement0: "#sylius_shipping_method_categoryRequirement_0",
    categoryRequirement1: "#sylius_shipping_method_categoryRequirement_1",
    categoryRequirement2: "#sylius_shipping_method_categoryRequirement_2",
    // Podatki
    taxCategory: "#sylius_shipping_method_taxCategory",
    // Koszty przesyłki
    calculator: "#sylius_shipping_method_calculator",
    retailAmount: "#sylius_shipping_method_configuration_RETAIL_amount",
    empikAmount: "#sylius_shipping_method_configuration_EMPIK_amount",
    academyAmount: "#sylius_shipping_method_configuration_ACADEMY_amount",
    wholesaleAmount: "#sylius_shipping_method_configuration_WHOLESALE_amount",
    name: "#sylius_shipping_method_translations_pl_PL_name",
    description: "#sylius_shipping_method_translations_pl_PL_description",
  },
  specificButtons: {
    formChooseFile: 'label[for="sylius_shipping_method_images_0_file"]'
  }
};