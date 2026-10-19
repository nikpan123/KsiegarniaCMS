import { Page } from "@playwright/test";
import { PaidCoursesPage } from "../../pages/paidCourses/PaidCoursesPage";
import { BaseAssertions } from "../base/BaseAssertions";

export class PaidCoursesAssertions extends BaseAssertions {
  constructor(page: Page, private pageObject: PaidCoursesPage) {
    super(page);
  }

  public async assertFiltersVisible() {
    const { filters } = this.pageObject;
    await this.assertElementsVisible([
      { selector: filters.sputnikCourseId, label: "Filtr ID SZKOLENIA" },
      { selector: filters.name, label: "Filtr NAZWA" },
      { selector: filters.sputnikAssumptionId, label: "Filtr ZAŁOŻENIE" },
      { selector: filters.isComplete, label: "Filtr ID KOMPLETNE" },
      { selector: filters.consultant, label: "Filtr ID PROWADZĄCY" },
    ]);
  }

  public async assertTableVisible() {
    const { columns } = this.pageObject;
    await this.assertElementsVisible([
      { selector: columns.sputnikCourseIdColumn, label: "Kolumna ID SZKOLENIA" },
      { selector: columns.nameColumn, label: "Kolumna NAZWA" },
      { selector: columns.sputnikAssumptionIdColumn, label: "Kolumna ZAŁOŻENIE" },
      { selector: columns.consultantColumn, label: "Kolumna PROWADZĄCY" },
      { selector: columns.isCompleteColumn, label: "Kolumna KOMPLETNE" },
      { selector: columns.actionsColumn, label: "Kolumna AKCJE" },
    ]);
  }

  public async assertButtonsVisible() {
    await this.assertElementsVisible([
      { selector: this.pageObject.resultsCount(), label: "Przycisk Liczba wyników" },
    ]);
  }
}