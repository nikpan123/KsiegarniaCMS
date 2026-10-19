export const newChannelsLocators = {
  form: {
    // Ogólne
    code: "#sylius_channel_code",
    name: "#sylius_channel_name",
    color: "#sylius_channel_color",
    enabled: "#sylius_channel_enabled",
    hostname: "#sylius_channel_hostname",
    email: "#sylius_channel_contactEmail",
    phoneNumber: "#sylius_channel_contactPhoneNumber",
    description: "#sylius_channel_description",
    countries: "#sylius_channel_countries",
    // Shop billing data
    company: "#sylius_channel_shopBillingData_company",
    taxId: "#sylius_channel_shopBillingData_taxId",
    countryCode: "#sylius_channel_shopBillingData_countryCode",
    street: "#sylius_channel_shopBillingData_street",
    city: "#sylius_channel_shopBillingData_city",
    postCode: "#sylius_channel_shopBillingData_postcode",
    accountNumber: "#sylius_channel_shopBillingData_accountNumber",
    // Pieniądze
    baseCurrency: "#sylius_channel_baseCurrency",
    currencies: "#sylius_channel_currencies",
    defaultTaxZone: "#sylius_channel_defaultTaxZone",
    taxCalculationStrategy: "#sylius_channel_taxCalculationStrategy",
    // Wygląda i interfejs
    themeName: "#sylius_channel_themeName",
    locales: "#sylius_channel_locales",
    defaultLocale: "#sylius_channel_defaultLocale",
    menuTaxon: 'div.sylius-autocomplete.ui.fluid.search.selection.dropdown[data-url="/ajax/taxons/search"]',
    skippingShippingStepAllowed: "#sylius_channel_skippingShippingStepAllowed",
    skippingPaymentStepAllowed: "#sylius_channel_skippingPaymentStepAllowed",
    accountVerificationRequired: "#sylius_channel_accountVerificationRequired",
    guestTotalOrderAmountLimit: "#sylius_channel_guestTotalOrderAmountLimit",
    defaultRealizationTime: "#sylius_channel_defaultRealizationTime_hours",
  },
};