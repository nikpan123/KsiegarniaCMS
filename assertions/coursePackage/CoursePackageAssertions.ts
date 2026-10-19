import { Page } from "@playwright/test";
import { CoursePackagePage } from "../../pages/coursePackage/CoursePackagePage";
import { BaseAssertions } from "../base/BaseAssertions";

export class CoursePackageAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: CoursePackagePage) {
    super(page);
  }

  public async assertFiltersVisible() {
    const { filters } = this.pageObject;
    await this.assertElementsVisible([
      { selector: filters.closedCourseMeetingNumber, label: "Filtr NUMER SPOTKANIE" },
      { selector: filters.closedCourseOrder, label: "Filtr NUMER ZAMÓWIENIA" },
      { selector: filters.createdAtFromDate, label: "Filtr DATA UTWORZENIA OD" },
      { selector: filters.createdAtFromTime, label: "Filtr GODZINA UTWORZENIA OD" },
      { selector: filters.createdAtToDate, label: "Filtr DATA UTWORZENIA DO" },
      { selector: filters.createdAtToTime, label: "Filtr GODZINA UTWORZENIA DO" },
      { selector: filters.realizationDateFromDate, label: "Filtr DATA SZKOLENIA OD" },
      { selector: filters.realizationDateFromTime, label: "Filtr GODZINA SZKOLENIA OD" },
      { selector: filters.realizationDateToDate, label: "Filtr DATA SZKOLENIA DO" },
      { selector: filters.realizationDateToTime, label: "Filtr GODZINA SZKOLENIA DO" },
      { selector: filters.hasRealisationDate, label: "Filtr SZKOLENIA BEZ USTALONEJ DATY" },
      { selector: filters.courseTopic, label: "Filtr TEMAT SZKOLENIA" },
      { selector: filters.promoter, label: "Filtr PROMOTOR" },
      { selector: filters.consultant, label: "Filtr PROWADZĄCY" },
      { selector: filters.placeName, label: "Filtr MIEJSCE" },
    ]);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.checkbox, label: "Kolumna CHECKBOX" },
      { selector: columns.assignedPromoter, label: "Kolumna PROMOTOR" },
      { selector: columns.createdAt, label: "Kolumna DATA UTWORZENIA" },
      { selector: columns.courseIds, label: "Kolumna NUMER SPOTKANIA" },
      { selector: columns.realizationDates, label: "Kolumna DATA SZKOLENIA" },
      { selector: columns.subject, label: "Kolumna TEMAT SZKOLENIA" },
      { selector: columns.leadingConsultants, label: "Kolumna PROWADZĄCY" },
      { selector: columns.placeNames, label: "Kolumna MIEJSCE" },
      { selector: columns.order, label: "Kolumna NUMER ZAMÓWIENIA" },
      { selector: columns.payer, label: "Kolumna PŁATNIK" },
      { selector: columns.total, label: "Kolumna ŁĄCZNIE" },
      { selector: columns.state, label: "Kolumna STATUS" },
      { selector: columns.actions, label: "Kolumna AKCJE" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.createButton(), label: "Przycisk UTWÓRZ" },
      { selector: this.pageObject.exportButton(), label: "Przycisk EKSPORT" },
      { selector: this.pageObject.resultsCount(), label: "Liczba wyników" },
    ]);
  }
}