import { commonLocators } from '../commonLocators';

export const specialOffersLocators = {
  filters: {
    code: commonLocators.filters.code,
    name: commonLocators.filters.name,
    enabled: commonLocators.filters.enabled,
    type: "#criteria_type",
  },
  columns: {
    checkbox: commonLocators.columns.checkbox,
    image: "[class='sylius-table-column-product.image']",
    codeColumn: ".sylius-table-column-product\\.code",
    nameColumn: ".sylius-table-column-product\\.name",
    mainTaxon: ".sylius-table-column-product\\.mainTaxon",
    enabledColumn: commonLocators.columns.enabled,
    typeColumn: commonLocators.columns.type,
    actions: commonLocators.columns.actions,
  },
  menu: {
    href1: 'a[href="/admin/special-offers/new/basic"]',
    href2: 'a[href="/admin/special-offers/new/n_plus"]',
    href3: 'a[href="/admin/special-offers/new/product_based"]',
    href4: 'a[href="/admin/special-offers/new/product_set"]',
    href5: 'a[href="/admin/special-offers/new/list_based"]',
  },
};