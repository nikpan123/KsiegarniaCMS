export const button = (text: string) => `.ui.button:has-text("${text}")`;
export const labeledButton = (text: string) => `a.ui.labeled.icon.button:has-text("${text}")`;
export const column = (name: string) => `.sylius-table-column-${name}`;
export const criteria = (name: string) => `#criteria_${name}`;
export const tab = (name: string) => `a.item[data-tab="${name}"]`;
export const form = (name: string) => `#sylius_product_attribute_configuration_${name}`;
export const formAddButton = (label: string) => labeledButton(`Dodaj ${label}`);
