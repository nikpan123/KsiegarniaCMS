import { BasePage } from "../base/BasePage";
import { paidCoursesLocators } from "../../locators/paidCourses/paidCoursesLocators";

export class PaidCoursesPage extends BasePage {
  filters = paidCoursesLocators.filters;
  columns = paidCoursesLocators.columns;

  public async open() {
    await super.open("academy/admin/paid-courses");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }
}
