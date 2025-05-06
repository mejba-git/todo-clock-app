const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const yearElement = document.querySelector(".year");
const dateElement = document.querySelector(".date");
const dayElement = document.querySelector(".day");
const timeFormate = document.querySelector(".timeFormate");
const getValue = document.querySelector("#getvalue");

let todoList = [];
let newValue;

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

setInterval(updateClock, 1000);

setTimeout(() => {
  const element = document.querySelector(".watch");
  element.classList.add("showWatch");
}, 1000);

// Update clock function
function updateClock() {
  const currentDate = new Date();
  const getMinute = currentDate.getMinutes().toString().padStart(2, "0");
  let getHour = currentDate.getHours();
  const getSeconds = currentDate.getSeconds().toString().padStart(2, "0");
  const getYear = currentDate.getFullYear();
  const todayDate = currentDate.getDate().toString().padStart(2, "0");

  const dayIndex = currentDate.getDay();
  const todayName = daysOfWeek[dayIndex];

  //am pm update

  console.log(getHour);

  if (getHour >= 12) {
    if (getHour !== 12) {
      getHour = getHour - 12;
    }
    timeFormate.innerHTML = "PM";
  } else if (getHour === 0) {
    timeFormate.innerHTML = "AM";
    getHour = 12;
  } else {
    timeFormate.innerHTML = "AM";
  }

  hourElement.innerHTML = getHour;
  minuteElement.innerHTML = getMinute;
  secondElement.innerHTML = getSeconds;
  yearElement.innerHTML = getYear;
  dateElement.innerHTML = todayDate;
  dayElement.innerHTML = todayName;
}

// Store data on localStorage by clicking the add button and add a new array
function setItem() {
  if (getValue.value !== "") {
    newValue = getValue.value;
    todoList = [...todoList, newValue];
    localStorage.setItem("ModernTodos", JSON.stringify(todoList));
    getValue.value = "";
    makeList();
    Watch();
  } else {
    editToDolist();
  }
}

// Add a single item to the DOM
function addListItem(item) {
  // Get a reference to the listSection with class 'listSection'
  const listSection = document.querySelectorAll(".listSection")[0];
  // Create new HTML elements
  const newDiv = document.createElement("div");
  const pTag = document.createElement("p");
  const buttonTag = document.createElement("button");

  // Set up an onclick attribute for the button, calling the 'delegation' function with the event
  buttonTag.setAttribute("onclick", "delegation(event)");

  // Add CSS classes to the new elements
  newDiv.classList.add("todoList");

  // Set text content for the paragraph and button
  pTag.classList.add("listContent");
  pTag.textContent = item;
  buttonTag.textContent = "X";

  // Append the paragraph and button to the new div
  newDiv.appendChild(pTag);
  newDiv.appendChild(buttonTag);

  // Append the new div to the list section
  listSection.appendChild(newDiv);
}

// Initialize the application by loading the list from localStorage
function makeList() {
  const listData = JSON.parse(localStorage.getItem("ModernTodos")) || [];
  todoList = listData;

  // Clear existing items in the DOM
  const listSection = document.querySelector(".listSection");
  listSection.innerHTML = "";

  // Add each item to the DOM
  todoList.forEach((item) => {
    addListItem(item);
  });
}

// Event delegation for remove button clicks

function delegation(event) {
  // Assuming the remove button is a span element
  const itemText = event.target.parentElement.firstChild.textContent;
  todoList = todoList.filter((item) => item !== itemText);
  localStorage.setItem("ModernTodos", JSON.stringify(todoList));
  makeList();
  Watch();
}

function Watch() {
  let hasItems = false;
  todoList.map((item) => {
    if (item) {
      const watchSection = document.querySelector(".main");
      watchSection.style.right = "50%";
      watchSection.style.transform = "translateX(50%)";

      hasItems = true;
    }
  });
  if (!hasItems) {
    const watchSection = document.querySelector(".main");
    watchSection.style.right = "0";
    watchSection.style.transform = "translateX(0)";
  }
}

// Adding an event listener (keydown) to the input element with id 'getValue'

getValue.addEventListener("keydown", (event) => {
  //if key was 'Enter key' then run 'setItem' function
  if (event.key === "Enter") {
    setItem();
  }
});

//edit list and update function

function editToDolist() {
  const lists = document.querySelectorAll(".listContent");
  lists.forEach((list, index) => {
    list.addEventListener("click", () => {
      list.setAttribute("contenteditable", "true");
    });
    todoList[index] = list.textContent;

    localStorage.setItem("ModernTodos", JSON.stringify(todoList));
  });
}
//setInterval(editToDolist,1000)

// Initial application setup
makeList();
Watch();
