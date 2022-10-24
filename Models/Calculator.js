class Calculator {
    constructor() {
      this.id = Math.floor(Math.random()*1000);
    }
  
    #log = (value) => {
      console.log(value);
    };
  
    add = (num1, num2) => {
      const value = num1 + num2;
      this.#log(`id: ${this.id} value: ${value}`);
      return value;
    };
  
    addByListArr = (arr) => {
      let sum = 0;
      arr.forEach((item) => {
        sum += item;
      });

      this.#log(`id: ${this.id} value: ${sum}`);
      return sum;
    };

    subtract = (num1, num2) => {
      const value = num1 - num2;
      this.#log(`id: ${this.id} value: ${value}`);
      return value;
    };

    multiply = (num1, num2) => {
      const value = num1 * num2;
      this.#log(`id: ${this.id} value: ${value}`);
      return value;
    };

    divide = (num1, num2) => {
      const value = num1 / num2;
      this.#log(`id: ${this.id} value: ${value}`);
      return value;
    };
  }
  
  module.exports = Calculator;