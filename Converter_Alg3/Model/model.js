export default class Model {
    constructor() {
      this.radio1 = document.querySelectorAll("input[name='radio1']");
      this.radio2 = document.querySelectorAll("input[name='radio2']");
  
      this.resultOfData = null;
    }
    convertValue(leftCurrency, rightCurrency) {
      rightCurrency.value = leftCurrency.value * this.resultOfData;
    }
  }