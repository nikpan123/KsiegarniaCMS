export const newCoursePackageLocators = {

  form: {
    promoterSearch: 'div.sylius-autocomplete.ui.fluid.search.selection.dropdown[data-url="/academy/ajax/search-promoter-by-name"]',
    consultantSearch: 'div.sylius-autocomplete.ui.fluid.search.selection.dropdown[data-url="/academy/ajax/search-all-consultants?show=inCourseCreation"]',
    closedCourseSearch: 'div.sylius-autocomplete.ui.fluid.search.selection.dropdown[data-url="/academy/ajax/search-all-closed-course"]',
    coursePackageType: "#course_package_coursePackageItems_0_type",
    coursePackageCanceled: "#course_package_coursePackageItems_0_is_canceled",
    comment: "#course_package_coursePackageItems_0_comment",
    realizationDate: "#course_package_coursePackageItems_0_realizationDate_date",
    realizationTime: "#course_package_coursePackageItems_0_realizationDate_time",
    coursePackageLength: "#course_package_coursePackageItems_0_length",
    participantNumber: "#course_package_coursePackageItems_0_participantNumber",
    addressName: "#course_package_coursePackageItems_0_address_name",
    addressStreet: "#course_package_coursePackageItems_0_address_street",
    addressStreetNumber: "#course_package_coursePackageItems_0_address_streetNumber",
    addressZipCode: "#course_package_coursePackageItems_0_address_zipCode",
    addressCity: "#course_package_coursePackageItems_0_address_cityId",
    phoneNumber: "#course_package_coursePackageItems_0_phoneNumber",
  },
  specificButtons: {
    formAddButton: 'a[data-form-collection="add"]',
    formAddSchoolButton: 'a[rel="modal:open"]',
    formDeleteButton: 'a[data-form-collection="delete"]',
  }
};