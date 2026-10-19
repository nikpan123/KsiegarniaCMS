import { commonLocators } from "../commonLocators";

export const productsLocators = {
  filters: {
    search: commonLocators.filters.search,
    enabled: commonLocators.filters.enabled,
    channel: commonLocators.filters.channel,
    onHandType: "#criteria_on_hand_type",
  },
  columns: {
    checkbox: commonLocators.columns.checkbox,
    image: commonLocators.columns.image,
    code: ".sylius-table-column-merchandise_code",
    name: commonLocators.columns.name,
    mainTaxon: ".sylius-table-column-mainTaxon",
    enabledColumn: commonLocators.columns.enabled,
    inventory: commonLocators.columns.inventory,
    actions: commonLocators.columns.actions,
  },
  menu: {
    href1: 'a[href="/products/new/simple/BOOK"]',
    href2: 'a[href="/products/new/simple/APP"]',
    href3: 'a[href="/products/new/simple/COMPOSER"]',
    href4: 'a[href="/products/new/simple/EBOOK"]',
    href5: 'a[href="/products/new/simple/VIDEO"]',
    href6: 'a[href="/products/new/APP"]',
    href7: 'a[href="/products/new/COMPOSER"]',
    href8: 'a[href="/products/new/simple/MHB"]',
  },
};