import { commonLocators } from '../../locators/commonLocators';

export const productAttributesLocators = {
  filters: {
    code: commonLocators.filters.code,
    translatable: "#criteria_translatable",
  },
  columns: {
    checkbox: commonLocators.columns.checkbox,
    codeColumn: commonLocators.columns.code,
    name: commonLocators.columns.name,
    type: commonLocators.columns.type,
    translatableColumn: ".sylius-table-column-translatable",
    actions: commonLocators.columns.actions,
  },
  menu: {
    href1: 'a[href="/product-attributes/text/new"]',
    href2: 'a[href="/product-attributes/textarea/new"]',
    href3: 'a[href="/product-attributes/checkbox/new"]',
    href4: 'a[href="/product-attributes/integer/new"]',
    href5: 'a[href="/product-attributes/percent/new"]',
    href6: 'a[href="/product-attributes/datetime/new"]',
    href7: 'a[href="/product-attributes/date/new"]',
    href8: 'a[href="/product-attributes/select/new"]',
  },
};