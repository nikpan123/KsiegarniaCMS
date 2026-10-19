import { BasePage } from "../base/BasePage";
import { newPaymentMethodsStripeLocators } from "../../locators/paymentMethods/newPaymentMethodsStripeLocators";

export class NewPaymentMethodsStripePage extends BasePage {
  formFields = newPaymentMethodsStripeLocators.form;
  specificButtons = newPaymentMethodsStripeLocators.specificButtons;
  buttons = newPaymentMethodsStripeLocators.buttons;

  public async open() {
    await super.open("payment-methods/new/stripe_checkout");
  }
}