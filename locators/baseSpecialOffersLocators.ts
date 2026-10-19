import { commonLocators } from './commonLocators';

export const baseSpecialOffersLocators = {
  formFields: {
    // Szczegóły
    code: '#special_offer_product_code',
    merchandiseCode: '#special_offer_product_variant_merchandiseCode',
    externalId: '#special_offer_product_variant_externalId',
    enabledProduct: '#special_offer_product_enabled',
    visibleOnList: '#special_offer_product_visibleOnList',
    visibleInBookshop: '#special_offer_product_visibleInBookshop',
    retail: '#special_offer_product_channels_0',
    empik: '#special_offer_product_channels_1',
    academy: '#special_offer_product_channels_2',
    wholesale: '#special_offer_product_channels_3',
    name: '#special_offer_product_translations_pl_PL_name',
    slug: '#special_offer_product_translations_pl_PL_slug',
    addElement: '.button.js-uie-add[data-position="0"]',
    metaKeywords: '#special_offer_product_translations_pl_PL_metaKeywords',
    metaDescription: '#special_offer_product_translations_pl_PL_metaDescription',
    shortDescription: '#special_offer_product_translations_pl_PL_shortDescription',
    // Konfiguracja
    dateFrom: '#special_offer_startDate_date',
    timeFrom: '#special_offer_startDate_time',
    dateTo: '#special_offer_endDate_date',
    timeTo: '#special_offer_endDate_time',
    enabledOffer: '#special_offer_enabled',
    ignoreCatalogPromotions: '#special_offer_configuration_ignoreCatalogPromotions',
    // Taksonomia
    mainGroups: 'div.sylius-autocomplete.ui.fluid.search.selection.dropdown[data-url="/ajax/taxons/search"]',
    mainBuyAgainList: '#special_offer_product_mainBuyAgainList',
    taxonomyTree: '#sylius-product-taxonomy-tree',
    // Atrybuty
    attributeChoice: '#attributeChoice div.ui.fluid.search.dropdown.selection.multiple',
    addAttributes: '.ui.green.labeled.icon.button',
    // Powiązania
    associationsDropdown: 'div.product-select.ui.fluid.multiple.search.selection.dropdown[data-url="/admin/ajax/all-except-code?limit=20"]',
    // Media
    addProductImages: '#special_offer_product_images a.ui.labeled.icon.button[data-form-collection="add"]',
    galleryTitle: '#special_offer_product_galleryTitle',
    addProductFiles: '#special_offer_product_files a.ui.labeled.icon.button[data-form-collection="add"]',
    // Labelki
    callouts: '#special_offer_product_callouts',
  },
  buttons: commonLocators.buttons,
};