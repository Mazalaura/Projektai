"use strict";

const currentPeriod = document.querySelector("#currentPeriod");
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
currentPeriod.append(`${year} ${month + 1} `);

function getDaysInMonth() {
  const daysInMonth = new Date(year, month, 0).getDate();
  return daysInMonth;
}

const allMonthDays = getDaysInMonth();
const dayNumber = document.querySelector("#dayNumber");
const monday = document.querySelector("#monday");
const tuesday = document.querySelector("#tuesday");
const wednesday = document.querySelector("#wednesday");
const thursday = document.querySelector("#thursday");
const friday = document.querySelector("#friday");
const saturday = document.querySelector("#saturday");
const sunday = document.querySelector("#sunday");
let divEl;
let day;
let d1 = new Date(year, month, 0);
let d;
const weekDay = d1.getDay();
console.log(month);
console.log(weekDay);
for (let i = 0; i < allMonthDays; i++) {
  // perdaug sukuria reikia pasiziureti kad ciklas neziureti tiek skaiciu
  d = new Date(year, month, i);

  const weekDay = d.getDay();

  //   if (i < weekDay) {
  //     divEl = document.createElement("div");
  //     divEl.classList.add("helper");
  //     monday.appendChild(divEl);
  //     // continue;
  //   }

  switch (weekDay) {
    case 0:
      // if irasyti kad tuscius div, kad jei i nera lygus 1 arba prasideda ne nuo 1
      divEl = document.createElement("div");
      day = document.createTextNode(`${i + 1}`);
      divEl.setAttribute("value", `${i + 1}`);
      divEl.appendChild(day);
      monday.appendChild(divEl);
      break;
    case 1:
      divEl = document.createElement("div");
      day = document.createTextNode(`${i + 1}`);
      divEl.setAttribute("value", `${i + 1}`);
      divEl.appendChild(day);
      tuesday.appendChild(divEl);
      break;
    case 2:
      divEl = document.createElement("div");
      day = document.createTextNode(`${i + 1}`);
      divEl.setAttribute("value", `${i + 1}`);
      divEl.appendChild(day);
      wednesday.appendChild(divEl);
      break;
    case 3:
      divEl = document.createElement("div");
      day = document.createTextNode(`${i + 1}`);
      divEl.setAttribute("value", `${i + 1}`);
      divEl.appendChild(day);
      thursday.appendChild(divEl);
      break;
    case 4:
      divEl = document.createElement("div");
      day = document.createTextNode(`${i + 1}`);
      divEl.setAttribute("value", `${i + 1}`);
      divEl.appendChild(day);
      friday.appendChild(divEl);
      break;
    case 5:
      divEl = document.createElement("div");
      day = document.createTextNode(`${i + 1}`);
      divEl.setAttribute("value", `${i + 1}`);
      divEl.appendChild(day);
      saturday.appendChild(divEl);
      break;
    case 6:
      divEl = document.createElement("div");
      day = document.createTextNode(`${i + 1}`);
      divEl.setAttribute("value", `${i + 1}`);
      divEl.appendChild(day);
      sunday.appendChild(divEl);
      break;
  }

  //   const liEl = document.createElement("li");
  //   const spanEl = document.createElement("span");
  //   const number = document.createTextNode(`${i}`);
  //   spanEl.appendChild(number);
  //   liEl.appendChild(spanEl);
  //   dayNumber.appendChild(liEl);
  //   liEl.setAttribute("value", i);
  //   console.log(weekDay);
}

// const formInputs = document.querySelector("#formInputs");
document.querySelector("#showForm").addEventListener("click", () => {
  document.querySelector("#formInputs").style.display = "block";
});

// session storage
const createEventBtn = document.querySelector("#createEventBtn");
createEventBtn.addEventListener("click", createEvent);
let queue = 1;
const titleInput = document.querySelector("#title");
const dateInput = document.querySelector("#date");
const startTimeInput = document.querySelector("#startTime");
const endTimeInput = document.querySelector("#endTime");
const typeInput = document.querySelector("#type");
const descriptionInput = document.querySelector("#description");
function createEvent() {
  //   patikrinti ar session storage toks egzistuoja ir tada tik irasyti nes tokiu paciu vardu neleidzia irasyti

  //   irasyti i masyva arba json faila padaryti

  const dataObj = {
    titleInput: titleInput.value,
    dateInput: dateInput.value,
    startTimeInput: startTimeInput.value,
    endTimeInput: endTimeInput.value,
    typeInput: typeInput.value,
    descriptionInput: descriptionInput.value,
  };

  const inputs = JSON.stringify(dataObj);
  sessionStorage.setItem(`data${queue}`, inputs);
  queue++;

  //   if (title !== "" && typeof title === "string") {
  //     sessionStorage.setItem("title", title);
  //   }
  //   if (date !== "") {
  //     sessionStorage.setItem("date", date);
  //   }
  //   if (startTime !== "") {
  //     sessionStorage.setItem("startTime", startTime);
  //   }
  //   if (endTime !== "") {
  //     sessionStorage.setItem("endTime", endTime);
  //   }
  //   sessionStorage.setItem("type", type);
  //   if (description !== "" && typeof description === "string") {
  //     sessionStorage.setItem("description", description);
  //   }
}

// function getEvent() {
//   sessionStorage.getItem("title");
//   sessionStorage.getItem("date");
//   sessionStorage.getItem("startTime");
//   sessionStorage.getItem("endTime");
//   sessionStorage.getItem("type");
//   sessionStorage.getItem("description");
// }

const detailedViews = document.querySelector("#detailedViews");
function detailView(value) {
  const event = sessionStorage.getItem(`${value}`);
  const data = JSON.parse(event);
  console.log(data);
}

// validation

titleInput.addEventListener("input", () => {
  if (titleInput.value === "" && titleInput.value.length <= 0) {
    document.querySelector("#titleErr1").style.display = "inline";
    titleInput.classList.add("help-class");
  } else if (titleInput.value.length > 50) {
    document.querySelector("#titleErr2").style.display = "inline";
    titleInput.classList.add("help-class");
  } else {
    document.querySelector("#titleErr1").style.display = "none";
    document.querySelector("#titleErr2").style.display = "none";
    titleInput.classList.remove("help-class");
  }
});

dateInput.addEventListener("change", () => {
  if (dateInput.value === "" && dateInput.value.length <= 0) {
    document.querySelector("#dateErr1").style.display = "inline";
    dateInput.classList.add("help-class");
  } else if (typeof dateInput !== "object") {
    document.querySelector("#dateErr2").style.display = "inline";
    dateInput.classList.add("help-class");
  } else {
    document.querySelector("#dateErr1").style.display = "none";
    document.querySelector("#dateErr2").style.display = "none";
    dateInput.classList.remove("help-class");
  }
});

startTimeInput.addEventListener("input", () => {
  if (startTimeInput.value === "" && startTimeInput.value.length <= 0) {
    document.querySelector("#startTimeErr1").style.display = "inline";
    startTimeInput.classList.add("help-class");
  } else if (typeof startTimeInput !== "object") {
    document.querySelector("#startTimeErr2").style.display = "inline";
    startTimeInput.classList.add("help-class");
  } else {
    document.querySelector("#startTimeErr1").style.display = "none";
    document.querySelector("#startTimeErr2").style.display = "none";
    startTimeInput.classList.remove("help-class");
  }
});

endTimeInput.addEventListener("input", () => {
  if (endTimeInput.value === "" && endTimeInput.value.length <= 0) {
    document.querySelector("#endTimeErr1").style.display = "inline";
    endTimeInput.classList.add("help-class");
  } else if (typeof endTimeInput !== "object") {
    document.querySelector("#endTimeErr2").style.display = "inline";
    endTimeInput.classList.add("help-class");
  } else if (endTimeInput.valueAsNumber <= startTimeInput.valueAsNumber) {
    document.querySelector("#endTimeErr3").style.display = "inline";
    endTimeInput.classList.add("help-class");
  } else {
    document.querySelector("#endTimeErr1").style.display = "none";
    document.querySelector("#endTimeErr2").style.display = "none";
    document.querySelector("#endTimeErr3").style.display = "none";
    endTimeInput.classList.remove("help-class");
  }
});

typeInput.addEventListener("input", () => {
  if (typeInput.value === "" && typeInput.value.length <= 0) {
    document.querySelector("#endTimeErr1").style.display = "inline";
    typeInput.classList.add("help-class");
  } else if (typeof typeInput !== "object") {
    document.querySelector("#endTimeErr2").style.display = "inline";
    typeInput.classList.add("help-class");
  } else {
    document.querySelector("#endTimeErr1").style.display = "none";
    typeInput.classList.remove("help-class");
  }
});

// padaryti button disabled jei forma negerai uzpildyta

const modal = document.querySelector("#modalView");
const modalBtn = document.querySelector("#modalBtn");
const closeBtn = document.querySelector(".closeBtn");

modalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
