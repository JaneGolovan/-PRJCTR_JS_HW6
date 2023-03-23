class Suppliers {
  constructor(name) {
    this.name = name;
    this.country = "China";
  }
  supplier = () => console.log(`${this.name}`);
}

class Wanda extends Suppliers {
  #personalWanda;
  constructor(name, city, amount) {
    super(name);
    this.city = city;
    this.amount = amount;
    this.#personalWanda = 0.05;
  }
  alertWanda = () => alert(`pls choose the branch of the company`);
  discount = () =>
    console.log(`The dicount amount is ${this.amount}*${this.#personalWanda}`);
  orderAmount = () => console.log(`The order amount is ${this.amount}`);
}

class HebeiWanda extends Wanda {
  constructor(name, city, port, branch) {
    super(name, city);
    this.port = port;
    this.branch = branch;
  }
  rightBranch() {
    if (this.branch === `hebei`) {
      console.log(`Finally! You've got a right branch company`);
    } else {
      console.log(`Pls try another time`);
    }
  }
}

class TianjinWanda extends Wanda {
  constructor(name, city, port, branch) {
    super(name, city);
    this.port = port;
    this.branch = branch;
  }
  leftBranch() {
    if (this.branch === `Tianjin`) {
      console.log(`Finally! You've got a left branch company`);
    } else {
      console.log(`Pls try another time`);
    }
  }
}
class Yesfree extends Suppliers {
  #personalYesfree;
  constructor(name, city, port) {
    super(name);
    this.city = city;
    this.port = port;
    this.product = "Kid Bikes";
    this.#personalYesfree = 0.06;
  }
  SayHelloYF() {
    if (this.port === "Tianjin") {
      console.log(
        `Hello, we represent ${this.name} a company from ${this.city}`
      );
    }
  }
  ifDiscountYF() {
    if (this.#personalYesfree > 0.05) {
      console.log(`${this.name} company is your golden supplier`);
    }
  }
  run() {
    console.log(`${this.name} sells ${this.product}!`);
  }
}

class Tigerbike extends Suppliers {
  #personalTigerbike;
  constructor(name, city, port) {
    super(name);
    this.city = city;
    this.port = port;
    this.#personalTigerbike = 0.05;
  }
  SayHelloTB() {
    if (this.port === "Tianjin") {
      console.log(`Hello, we represent ${this.name} company from ${this.city}`);
    } else {
      console.log(`you have no any shipments from ${this.port}`);
    }
  }
  ifDiscountTG() {
    if (this.#personalTigerbike > 0.05) {
      console.log(`${this.name} company is your golden supplier`);
    }
  }
}

class Kenli extends Suppliers {
  #personalKenli;
  constructor(name, city, port) {
    super(name);
    this.city = city;
    this.port = port;
    this.#personalKenli = 0.04;
  }
  SayHelloKN() {
    if (this.port === "Shanhai") {
      console.log(`Hello, we represent ${this.name} company from ${this.city}`);
    } else {
      console.log(`you have to choose a different supplier.`);
    }
  }
  ifDiscountKN() {
    if (this.#personalKenli > 0.05) {
      console.log(`${this.name} company is your golden supplier`);
    }
  }
}

const wanda = new Wanda("Wanda");
console.log(wanda);
// wanda.alertWanda();
const TGB = new Tigerbike("Tigerbike", "Xingang", "Tianjin");
TGB.SayHelloTB();
