class Calculator {
    constructor() {
      this.id = Math.floor(Math.random()*1000);
    }
  
    #log = (value) => {
      console.log(`${this.constructor.name} id: ${this.id} value: ${value}`); //this makes sure all log msgs are consistent
    };
  
    add = (num1, num2) => {
      const value = num1 + num2;
      this.#log(value);
      return value;
    };
  
    addByListArr = (arr) => {
      let sum = 0;
      arr.forEach((item) => {
        sum += item;
      });

      this.#log(sum);
      return sum;
    };

    subtract = (num1, num2) => {
      const value = num1 - num2;
      this.#log(value);
      return value;
    };

    multiply = (num1, num2) => {
      const value = num1 * num2;
      this.#log(value);
      return value;
    };

    divide = (num1, num2) => {
      const value = num1 / num2;
      this.#log(value);
      return value;
    };
  }
  
  module.exports = Calculator;