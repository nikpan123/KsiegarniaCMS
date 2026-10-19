export const newAnnouncementsLocators = {
  form: {
    addElement: '.js-uie-add[data-position="0"]',
    type: "#announcement_type",
    dateFrom: "#announcement_dateFrom_date",
    timeFrom: "#announcement_dateFrom_time",
    dateTo: "#announcement_dateTo_date",
    timeTo: "#announcement_dateTo_time",
    taxonomy: 'div.sylius-autocomplete.ui.fluid.search.selection.dropdown[data-url="/admin/ajax/search-taxons"]',
    attributes: "#announcement_configuration_attributesValues_product_attributes",
  },
};