import { BasePage } from "../base/BasePage";
import { newPaymentMethodsPayuLocators } from "../../locators/paymentMethods/newPaymentMethodsPayuLocators";

export class NewPaymentMethodsPayuPage extends BasePage {
  formFields = newPaymentMethodsPayuLocators.form;
  specificButtons = newPaymentMethodsPayuLocators.specificButtons;
  buttons = newPaymentMethodsPayuLocators.buttons;

  public async open() {
    await super.open("payment-methods/new/payu");
  }
}