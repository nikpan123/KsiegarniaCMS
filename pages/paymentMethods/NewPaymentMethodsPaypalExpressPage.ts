import { BasePage } from "../base/BasePage";
import { newPaymentMethodsPaypalExpressLocators } from "../../locators/paymentMethods/newPaymentMethodsPaypalExpressLocators";

export class NewPaymentMethodsPaypalExpressPage extends BasePage {
  formFields = newPaymentMethodsPaypalExpressLocators.form;
  specificButtons = newPaymentMethodsPaypalExpressLocators.specificButtons;
  buttons = newPaymentMethodsPaypalExpressLocators.buttons;

  public async open() {
    await super.open("payment-methods/new/paypal_express_checkout");
  }
}