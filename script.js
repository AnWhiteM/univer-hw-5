//Task 1
// function showMessage() {
//   console.log("Привет мир!");
// }

// setTimeout(showMessage, 2000);

//Task 2

// var person = {
//   firstName: "John",
//   lastName: "Cramer",
// };

// function greet(message) {
//   console.log(`Привет, ${this.firstName} ${this.lastName}! ${message}`);
// }
// greet.call(person, "Как дела?");
// greet.apply(person, ["Как дела?"]);

// var greetPerson = greet.bind(person);
// greetPerson("Как дела?");

//Task 3
// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   start() {
//     console.log(
//       `Автомобиль ${this.year} ${this.make} ${this.model} запускается.`
//     );
//   }
// }
// const myCar = new Car("Toyota", "Camry", 2022);
// myCar.start();

//Task 4
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;

//       if (success) {
//         resolve("Данные успешно получены.");
//       } else {
//         reject("Не удалось получить данные.");
//       }
//     }, 2000);
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//Task 5
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;

//       if (success) {
//         resolve("Данные успешно получены.");
//       } else {
//         reject("Не удалось получить данные.");
//       }
//     }, 2000);
//   });
// }
// async function fetchDataAsync() {
//   try {
//     const data = await fetchData();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchDataAsync();
