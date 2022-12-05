export default class View {
    constructor() {
      this.left_currency_value = document.querySelector(
        "input[name='radio1']:checked"
      );
  
      this.right_currency_value = document.querySelector(
        "input[name='radio2']:checked"
      );
    }
  }