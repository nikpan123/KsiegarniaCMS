import { BasePage } from "../base/BasePage";
import { coursePackageLocators } from "../../locators/coursePackage/coursePackageLocators";

export class CoursePackagePage extends BasePage {
  filters = coursePackageLocators.filters;
  columns = coursePackageLocators.columns;

  public async open() {
    await super.open("academy/course-package");
  }

  public async openFilters() {
    await this.filterButton().click(); // użycie metody z BasePage zamiast bezpośredniego lokatora
  }
}