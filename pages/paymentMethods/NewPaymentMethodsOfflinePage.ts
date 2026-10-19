import { BasePage } from "../base/BasePage";
import { newPaymentMethodsOfflineLocators } from "../../locators/paymentMethods/newPaymentMethodsOfflineLocators";

export class NewPaymentMethodsOfflinePage extends BasePage {
  formFields = newPaymentMethodsOfflineLocators.form;
  specificButtons = newPaymentMethodsOfflineLocators.specificButtons;
  buttons = newPaymentMethodsOfflineLocators.buttons;

  public async open() {
    await super.open("payment-methods/new/offline");
  }
}