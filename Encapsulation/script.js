"use strict";
class DivCreator {
  // colors = ["red", "blue", "black"];

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
  }

  generateDiv() {
    const newDiv = document.createElement("div");
    document.body.append(newDiv);
    newDiv.style.background = this.color;
    newDiv.style.height = `${this.height}px`;
    newDiv.style.width = `${this.width}px`;
    // newDiv.style.borderRadius = "50px";

    // must create some div with this.height this.wight this.color
  }

  #setSize() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }

  #setColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}

let button = document.getElementById("rectangle");
button.onclick = () => {
  let rectangle = new DivCreator();
  rectangle.generateDiv();
};

// child Class

class Square extends DivCreator {
  constructor() {
    super();
    this.width = this.height;
  }
}
let button2 = document.getElementById("square");
button2.onclick = () => {
  let square = new Square();
  square.generateDiv();
};
//child circle
class Circle extends DivCreator {
  constructor() {
    super();
  }
  generateCircle() {
    let circles = document.createElement("div");
    document.body.append(circles);
    circles.style.background = this.color;
    circles.style.height = `${this.height}px`;
    circles.style.width = `${this.width}px`;
    circles.style.borderRadius = "50px";
  }
}
let button3 = document.getElementById("circle");
button3.onclick = () => {
  let circle = new Circle();
  circle.generateCircle();
};
