import { Page } from "@playwright/test";
import { NewCoursePackagePage } from "../../pages/coursePackage/NewCoursePackagePage";
import { BaseAssertions } from "../base/BaseAssertions";

export class NewCoursePackageAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: NewCoursePackagePage) {
    super(page);
  }

  public async assertButtonsVisible() {
    const { specificButtons } = this.pageObject;
    await this.assertElementsVisible([
      { selector: specificButtons.formAddButton, label: "Przycisk DODAJ" },
    ]);
  }

  public async assertButtonsVisibleAfterAdd() {
    const { specificButtons } = this.pageObject;
    await this.assertElementsVisible([
      { selector: specificButtons.formAddSchoolButton, label: "Przycisk DODAWANIE SZKÓŁ" },
      { selector: specificButtons.formDeleteButton, label: "Przycisk USUŃ" },
      { selector: this.pageObject.formCreateButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.cancelButton(), label: "Przycisk ANULUJ" },
    ]);
  }

  public async assertFormVisible() {
    const { formFields } = this.pageObject;
    await this.assertElementsVisible([
      { selector: formFields.promoterSearch, label: "Pole PRZYPISANY PROMOTOR" },
      { selector: formFields.consultantSearch, label: "Pole PROWADZĄCY" },
      { selector: formFields.closedCourseSearch, label: "Pole TEMAT SZKOLENIA" },
      { selector: formFields.coursePackageType, label: "Pole TYP SZKOLENIA" },
      { selector: formFields.coursePackageCanceled, label: "Pole ANULOWANE" },
      { selector: formFields.comment, label: "Pole KOMENTARZ" },
      { selector: formFields.realizationDate, label: "Pole DATA ROZPOCZĘCIA" },
      { selector: formFields.realizationTime, label: "Pole GODZINA ROZPOCZĘCIA" },
      { selector: formFields.coursePackageLength, label: "Pole DŁUGOŚĆ SZKOLENIA" },
      { selector: formFields.participantNumber, label: "Pole LICZBA UCZESTNIKÓW" },
      { selector: formFields.addressName, label: "Pole NAZWA MIEJSCA" },
      { selector: formFields.addressStreet, label: "Pole ULICA" },
      { selector: formFields.addressStreetNumber, label: "Pole NUMER" },
      { selector: formFields.addressZipCode, label: "Pole KOD POCZTOWY" },
      { selector: formFields.addressCity, label: "Pole MIASTO" },
      { selector: formFields.phoneNumber, label: "Pole TELEFON" },
    ]);
  }
}