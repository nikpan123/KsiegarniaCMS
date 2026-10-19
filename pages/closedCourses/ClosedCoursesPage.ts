import { BasePage } from "../base/BasePage";
import { closedCoursesLocators } from "../../locators/closedCourses/closedCoursesLocators";

export class ClosedCoursesPage extends BasePage {
  filters = closedCoursesLocators.filters;
  columns = closedCoursesLocators.columns;

  public async open() {
    await super.open("academy/admin/closed-courses");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }
}