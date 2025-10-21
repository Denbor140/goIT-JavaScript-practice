// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];
// const newArr = numbers.map((number) => number * number);

// console.log(newArr);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// // Дано масив об'єктів. Створіть новий масив, що містить всі значення
// // з масивів values кожного об'єкту, збережених в одному масиві.
// // Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const newArr = data.flatMap((elem) => elem.values);

// console.log(newArr);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const newPeople = people.some((elem) => elem.age < 20);
// console.log(newPeople);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];
// const newArr = numbers.every((num) => num % 2 === 0);
// console.log(newArr);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// // Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const newArr = numbers.find((num) => num % 2 !== 0);
// console.log(newArr);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
// const newArr = numbersArray.toSorted((a, b) => a - b);
// console.log(newArr);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// // Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
// //  у порядку алфавіту.
// // Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];
// const newArr = stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log(newArr);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const newArr = users.toSorted((a, b) => a.age - b.age);
// console.log(newArr);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const newArr = users.filter((user) => user.age > 20);
// console.log(newArr);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];
// const newNum = numbers.reduce((acc, elem) => acc + elem, 0);
// console.log(newNum);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Розроби клас Calculator, який дозволяє виконувати арифметичні
// операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.
// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод substruct - Віднімає value від поточного значення. Повертає this.
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод multiply -Множить поточне значення на value. Повертає this.
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
// Приклад використання:
// const calc = new Calculator();

// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

// class Calculator {
//   number(value) {
//     this.value = value;
//     return this;
//   }
//   add(value) {
//     this.value += value;
//     return this;
//   }
//   subtract(value) {
//     this.value -= value;
//     return this;
//   }
//   multiply(value) {
//     this.value *= value;
//     return this;
//   }
//   divide(value) {
//     if (value === 0) {
//       console.log(`Неможливо поділити`);
//       return this;
//     }
//     this.value /= value;
//     return this;
//   }
//   getResult() {
//     return this.value;
//   }
// }

// const calc = new Calculator();

// const result = calc
//   .number(10)
//   .add(5)
//   .subtract(3)
//   .multiply(4)
//   .divide(2)
//   .getResult();

// console.log(result);

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor(params) {
//     this.#login = params.login;
//     this.#email = params.email;
//   }

//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new Client({
//   login: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango.login);
// console.log(mango.email); // mango@mail.com

// mango.login = "MangoSuper";
// mango.email = "mango@supermail.com";
// console.log(mango.login);
// console.log(mango.email); // mango@supermail.com

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`,
// який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// class Person {
//   constructor(params) {
//     this.name = params.name;
//     this.age = params.age;
//     this.gender = params.gender;
//     this.email = params.email;
//   }

//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// class Employee extends Person {
//   constructor(params) {
//     super(params);
//     this.salary = params.salary;
//     this.department = params.department;
//   }

//   getEmployeeDetails() {
//     return {
//       salary: this.salary,
//       department: this.department,
//     };
//   }
// }

// const person = new Person({
//   name: "Oleh",
//   age: 30,
//   gender: "male",
//   email: "oleh@example.com",
// });

// const employee = new Employee({
//   name: "Anna",
//   age: 28,
//   gender: "female",
//   email: "anna@example.com",
//   salary: 5000,
//   department: "HR",
// });

// console.log(person.getDetails());
// console.log(employee.getDetails());

// console.log(employee.getEmployeeDetails());
