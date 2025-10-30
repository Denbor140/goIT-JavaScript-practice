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
console.log(ulElem);

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
    numberContainer.style.backgroundColor = "green";
    numberContainer.style.color = "white";
  } else {
    numberContainer.classList.add("odd");
    numberContainer.style.backgroundColor = "yellow";
    numberContainer.style.color = "red";
  }
  divContainer.appendChild(numberContainer);
}

bodyElem2.append(divContainer);
