export default class Controller {
    constructor(view, model) {
      this.view = view;
      this.model = model;
    }
  
    init() {
      this.render();
    }
  
    async getDataFromApi(from, to) {
      let url = `https://api.exchangerate.host/convert?from=${from}&to=${to}`;
  
      const res = await fetch(url);
      const data = await res.json();
  
      this.model.resultOfData = data.result;
    }
  
    valueConvertText() {
      const rateFrom = document.getElementById("rateFrom");
      rateFrom.innerText = `1 ${
        this.view.left_currency_value
      } = ${this.model.resultOfData.toFixed(6)} ${
        this.view.right_currency_value
      }`;
  
      const rateIn = document.getElementById("rateIn");
      rateIn.innerText = `1 ${this.view.right_currency_value} =  ${(
        1 / this.model.resultOfData
      ).toFixed(6)} ${this.view.left_currency_value}`;
    }
  
    render() {
      this.input_currency = document.querySelectorAll(".money-input");
  
      this.view.left_currency_value = document.querySelector(
        "input[name='radio1']:checked"
      ).value;
  
      this.view.right_currency_value = document.querySelector(
        "input[name='radio2']:checked"
      ).value;
  
      this.getDataFromApi(
        this.view.left_currency_value,
        this.view.right_currency_value
      );
  
      this.model.radio1.forEach((el) => {
        el.addEventListener("click", async () => {
          this.view.left_currency_value = document.querySelector(
            "input[name='radio1']:checked"
          ).value;
  
          await this.getDataFromApi(
            this.view.left_currency_value,
            this.view.right_currency_value
          );
          this.model.convertValue(this.input_currency[0], this.input_currency[1]);
  
          this.valueConvertText();
        });
      });
  
      this.model.radio2.forEach((el) => {
        el.addEventListener("click", async () => {
          this.view.right_currency_value = document.querySelector(
            "input[name='radio2']:checked"
          ).value;
          await this.getDataFromApi(
            this.view.left_currency_value,
            this.view.right_currency_value
          );
          this.model.convertValue(this.input_currency[0], this.input_currency[1]);
  
          this.valueConvertText();
        });
      });
  
      this.input_currency[0].addEventListener("keyup", () => {
        this.model.convertValue(this.input_currency[0], this.input_currency[1]);
        this.valueConvertText();
      });
  
      this.input_currency[1].addEventListener("keyup", () => {
        this.model.convertValue(this.input_currency[1], this.input_currency[0]);
        this.valueConvertText();
      });
    }
  }