"use strict";
class DivCreator {
  // colors = ["red", "blue", "black"];

  constructor(color) {
    this.colors = ["red", "blue", "black"];
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
    // console.log(this.height);
    newDiv.style.width = `${this.width}px`;

    // must create some div with this.height this.wight this.color
  }

  #setSize() {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  }

  #setColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}

let button = document.getElementById("button");
button.onclick = () => {
  let square = new DivCreator();
  square.generateDiv();
};
