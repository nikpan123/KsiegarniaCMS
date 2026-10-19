import { BasePage } from "../base/BasePage";
import { newCoursePackageLocators } from "../../locators/coursePackage/newCoursePackageLocators";

export class NewCoursePackagePage extends BasePage {
  formFields = newCoursePackageLocators.form;
  specificButtons = newCoursePackageLocators.specificButtons;

  public async open() {
    await super.open("academy/course-package/new");
  }

  public async clickFormAddButton() {
    await this.page.locator(this.specificButtons.formAddButton).click();
  }
}