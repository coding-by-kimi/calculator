let display = document.getElementById("display");

function appendToDisplay(value) {
  if (value === "%") {
    display.value += "/";
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculateMe() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "error";
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendToDisplay(key);
  } else if (key === "Enter" || key === "=") {
    event.preventDefault();
    calculateMe();
  } else if (key === "Backspace") {
    backspace();
  } else if (key.toLowerCase() === "c" || key === "Escape") {
    clearDisplay();
  } else if (key === "%") {
    appendToDisplay("%");
  }
});
