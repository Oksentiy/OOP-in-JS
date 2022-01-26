"use strict";

class DivCreator {
  constructor(color) {
    this.colors = [
      "green",
      "blue",
      "black",
      "orange",
      "pink",
      "purple",
      "yellow",
    ];
    this.color = color || this.#setColor();
    this.min = 10;
    this.max = 100;
    this.height = this.#setSize();
    this.width = this.#setSize();
    this.newDiv = document.createElement("div");
  }

  generateDiv() {
    document.body.append(this.newDiv);
    this.newDiv.style.background = this.color;
    this.newDiv.style.height = `${this.height}px`;
    this.newDiv.style.width = `${this.width}px`;
  }
  generateText() {
    throw new NotImplementedError();
  }

  #setSize() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }

  #setColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}

// child Class Square

class Square extends DivCreator {
  constructor() {
    super();
    this.width = this.height;
  }
  generateText() {
    console.log("This is square");
  }
}
let button2 = document.getElementById("square");
button2.onclick = () => {
  let square = new Square();
  square.generateDiv();
  square.generateText();
};

//child Class Circle

class Circle extends DivCreator {
  generateDiv() {
    super.generateDiv();
    this.newDiv.style.borderRadius = "50px";
  }
  // generateText() {
  //   console.log("This is oval");
  // }
}

let button3 = document.getElementById("circle");
button3.onclick = () => {
  let circle = new Circle();
  circle.generateDiv();
  circle.generateText();
};
