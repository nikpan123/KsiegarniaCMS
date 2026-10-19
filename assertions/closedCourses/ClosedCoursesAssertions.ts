import { Page } from "@playwright/test";
import { ClosedCoursesPage } from "../../pages/closedCourses/ClosedCoursesPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class ClosedCoursesAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: ClosedCoursesPage) {
    super(page);
  }

  public async assertFiltersVisible() {
    const { filters } = this.pageObject;
    await this.assertElementsVisible([
      { selector: filters.id, label: "Filtr ID" },
      { selector: filters.subject, label: "Filtr TEMAT SZKOLENIA" },
      { selector: filters.consultant, label: "Filtr PROWADZĄCY" },
      { selector: filters.enabled, label: "Filtr DOSTĘPNY" },
    ]);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.idColumn, label: "Kolumna ID" },
      { selector: columns.length, label: "Kolumna DŁUGOŚĆ SZKOLENIA" },
      { selector: columns.subjectColumn, label: "Kolumna TEMAT SZKOLENIA" },
      { selector: columns.consultantColumn, label: "Kolumna PROWADZĄCY" },
      { selector: columns.enabledColumn, label: "Kolumna DOSTĘPNY" },
      { selector: columns.actions, label: "Kolumna AKCJE" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.resultsCount(), label: "Liczba wyników" },
    ]);
  }
}