let TBODY = document.getElementsByTagName("tbody")[0];

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      let row = document.createElement("tr");
      let id = document.createElement("td");
      let name = document.createElement("td");
      let username = document.createElement("td");
      let phone = document.createElement("td");
      let email = document.createElement("td");
      let website = document.createElement("td");
      let deleteBTN = document.createElement("button");

      id.innerText = user.id;
      name.innerText = user.name;
      username.innerText = user.username;
      phone.innerText = user.phone;
      email.innerText = user.email;
      website.innerText = user.website;
      deleteBTN.innerText = "Delete";
      deleteBTN.classList.add("btn-delete");

      deleteBTN.addEventListener("click", () => {
        row.remove();
      });

      row.appendChild(id);
      row.appendChild(name);
      row.appendChild(username);
      row.appendChild(phone);
      row.appendChild(email);
      row.appendChild(website);
      row.appendChild(deleteBTN);

      TBODY.appendChild(row);
    });
  })
  .catch((error) => {
    alert("Error: " + error);
  });

// shape classo

class Shape {
  calculateArea() {
    return 0;
  }
  calculatePerimeter() {
    return 0;
  }

  printAll() {
    console.log(
      "Area: " +
        this.calculateArea() +
        " Perimeter: " +
        this.calculatePerimeter()
    );
  }

  printArea() {
    console.log("Area: " + this.calculateArea());
  }

  printPerimeter() {
    console.log("Perimeter: " + this.calculatePerimeter());
  }

  toString() {
    return "Shape";
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }

  toString() {
    return `Rectangle: width = ${this.width}, height = ${this.height}`;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  toString() {
    return `Square: side = ${this.width}`;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }

  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }

  toString() {
    return `Circle: radius = ${this.radius}`;
  }
}

let shape = new Shape();
let rectangle = new Rectangle(5, 10);
let square = new Square(5);
let circle = new Circle(5);

console.log(shape.toString());
console.log(rectangle.toString());
console.log(square.toString());
console.log(circle.toString());

shape.printAll();
rectangle.printAll();
square.printAll();
circle.printAll();

shape.printArea();
rectangle.printArea();
square.printArea();
circle.printArea();

shape.printPerimeter();
rectangle.printPerimeter();
square.printPerimeter();
circle.printPerimeter();
