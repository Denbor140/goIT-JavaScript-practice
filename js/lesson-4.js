// 1 - отримай body елемент і виведи його в консоль;
const bodyElem = document.querySelector("body");
console.log(bodyElem);

// 2 - отримай елемент id="title" і виведи його в консоль;
const titleElem = document.querySelector("#title");
console.dir(titleElem);

// 3 - отримай елемент class="list" і виведи його в консоль;
const classElem = document.querySelector(".list");
console.log(classElem);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const dataElem = document.querySelectorAll("[data-topic]");
console.log(dataElem);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(dataElem[0]);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(dataElem[dataElem.length - 1]);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
console.log(titleElem.nextElementSibling);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const h3Elem = document.querySelectorAll("h3");
h3Elem.forEach((elem) => {
  console.log(elem.textContent);
});

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
const h3Elem2 = document.querySelectorAll("h3");
h3Elem2.forEach((elem) => {
  elem.classList.add("active");
  if (elem.classList.contains("active")) {
    elem.style.color = "red";
  }
});

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const liElem = document.querySelector("[data-topic=navigation");
console.dir(liElem);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
liElem.style.backgroundColor = "yellow";

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const liElem2 = document.querySelector("[data-topic=navigation]");
const pElem = liElem2.querySelector("p"); //// шукаємо "р"
if (pElem) {
  // якщо є <p>
  pElem.textContent = "Я змінив тут текст!";
  // міняємо текст
}

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якого атрибут data-topic має значення,
// яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const currentTopicElem = document.querySelector(
  `[data-topic="${currentTopic}"]`
);
console.log(currentTopicElem);

// 14 - додай до знайденого елемен та атрибут style і зроби його backgroundColor блакитним;
currentTopicElem.style.backgroundColor = "blue";

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const completedElem = document.querySelector(".completed");
console.log(completedElem);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const liElem3 = document.querySelectorAll("li");

liElem3.forEach((element) => {
  const compClass = element.querySelector(".completed");
  if (compClass) {
    element.remove();
  }
});

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст:
// "Об'єктна модель документа (Document Object Model)"
const h1Elem = document.querySelector("h1");

if (h1Elem) {
  const pElem2 = document.createElement("p");
  pElem2.textContent = "Об'єктна модель документа (Document Object Model)";
  h1Elem.insertAdjacentElement("afterend", pElem2);
}

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML"
// а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево -
// це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".
// тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
const ulElem = document.querySelector("ul");

if (ulElem) {
  const createLi = document.createElement("li");
  const createH3 = document.createElement("h3");
  const createP = document.createElement("p");
  createH3.textContent = "Властивість innerHTML";
  createP.textContent =
    "Ще один спосіб створити DOM-елементи і помістити їх в дерево -це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
  createLi.append(createH3, createP);
  ulElem.append(createLi);
}

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const ulElem2 = document.querySelector("ul");

if (ulElem2) {
  const h3Title = "Властивість innerHTML";
  const pTitle =
    "Ще один спосіб створити DOM-елементи і помістити їх в дерево -це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
  ulElem2.insertAdjacentHTML(
    "beforeend",
    `<li><h3>${h3Title}</h3><p>${pTitle}</p></li>`
  );
}

// 20 - очисти список
const ulElem3 = document.querySelector("ul");
ulElem3.innerHTML = "";

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const bodyElem2 = document.querySelector("body");

const divContainer = document.createElement("div");
divContainer.classList.add("number-container");

for (let i = 0; i < 100; i++) {
  const numberContainer = document.createElement("div");
  numberContainer.className = "number";
  const numRandom = randomNumber();
  numberContainer.textContent = numRandom;
  if (numRandom % 2 === 0) {
    numberContainer.classList.add("even");
  } else {
    numberContainer.classList.add("odd");
  }
  divContainer.appendChild(numberContainer);
}

bodyElem2.append(divContainer);

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
const inptElem = document.querySelector(".js-username-input");

inptElem.addEventListener("input", (e) => {
  if (e.currentTarget.value.length > 6) {
    inptElem.classList.add("success");
    inptElem.classList.remove("error");
  } else {
    inptElem.classList.add("error");
    inptElem.classList.remove("success");
  }
});

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
const inptElem2 = document.querySelector(".js-username-input");
inptElem2.addEventListener("focus", (e) => {
  if (e.currentTarget.value === "") {
    e.currentTarget.style.outline = "3px solid red";
  } else {
    e.currentTarget.style.outline = "3px solid green";
  }
});

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

const inptElem3 = document.querySelector(".js-username-input");
inptElem3.addEventListener("blur", (e) => {
  if (e.currentTarget.value === "") {
    e.currentTarget.style.outline = "3px solid red";
  } else {
    e.currentTarget.style.outline = "3px solid lime";
  }
});

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName) у обьект і виведи у консоль.
// У разі, якщо користувач не виконав одну із умов, виведи повідомлення.
// Також при події інпут реалізуй додавання ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так, щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення false, верни дефолтне значення "Anonymous" у span.
const formElem = document.querySelector(".js-contact-form");
const inptElem4 = document.querySelector(".js-username-input");
const output = document.querySelector(".js-username-output");

function formSubmit(e) {
  e.preventDefault();

  const userFormData = new FormData(formElem);
  const userData = {
    name: userFormData.get("userName").trim(),
    accept: Boolean(userFormData.get("accept")),
    //можна ще userFormData.get("accept") === "on"
    // або !!userFormData.get("accept")
  };

  if (userData.name === "") {
    return alert("Ім'я не заповнено");
  } else if (userData.accept === false) {
    return alert("Погодтесь із політикою конфіденційності");
  }
  console.log(userData);

  formElem.reset();
  output.textContent = "Anonymous";
}
function inputValue(e) {
  const value = e.currentTarget.value.trim();

  if (value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = value;
  }
}

formElem.addEventListener("submit", formSubmit);
inptElem4.addEventListener("input", inputValue);

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
const boxElem = document.querySelector(".box");
console.dir(boxElem);

const bDecrease = document.querySelector(".js-decrease");
const bIncrease = document.querySelector(".js-increase");

bDecrease.addEventListener("click", (e) => {
  const newWidth = 20;
  const currentWidth = parseInt(getComputedStyle(boxElem).width);
  boxElem.style.width = currentWidth - newWidth + "px";
  boxElem.style.height = currentWidth - newWidth + "px";
});
bIncrease.addEventListener("click", (e) => {
  const newWidth = 20;
  const currentWidth = parseInt(getComputedStyle(boxElem).width);
  boxElem.style.width = currentWidth + newWidth + "px";
  boxElem.style.height = currentWidth + newWidth + "px";
});
