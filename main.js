const clock = document.getElementById("clock");
const hour = Array.from(
  document.getElementById("hour").getElementsByClassName("digit")
);
const minute = Array.from(
  document.getElementById("minute").getElementsByClassName("digit")
);

const second = Array.from(
  document.getElementById("second").getElementsByClassName("digit")
);

console.log(second);

const digit = {
  0: ["active", "active", "active", "", "active", "active", "active"],
  1: ["", "", "active", "", "", "active", ""],
  2: ["active", "", "active", "active", "active", "", "active"],
  3: ["active", "", "active", "active", "", "active", "active"],
  4: ["", "active", "active", "active", "", "active", ""],
  5: ["active", "active", "", "active", "", "active", "active"],
  6: ["active", "active", "", "active", "active", "active", "active"],
  7: ["active", "", "active", "", "", "active", ""],
  8: ["active", "active", "active", "active", "active", "active", "active"],
  9: ["active", "active", "active", "active", "", "active", "active"],
};

function updateDigit(digitElement, number) {
  Array.from(digitElement.getElementsByClassName("segment")).map(
    (segment, index) => {
      segment.classList.remove("active");
      const segmentVisibility = digit[number][index];
      if (segmentVisibility) {
        segment.classList.add(segmentVisibility);
      }
    }
  );
}

function updateClock() {
  const timeHour = new Date().getHours().toString();
  const timeMinute = new Date().getMinutes().toString().padStart(2, "0");
  const timeSecond = new Date().getSeconds().toString().padStart(2, "0");

  //updating hours
  if (timeHour.length > 1) {
    updateDigit(hour[0], timeHour[0]);
    updateDigit(hour[1], timeHour[1]);
  } else {
    Array.from(hour[0].getElementsByClassName("segment")).map((segment) => {
      segment.classList.remove("active");
    });

    updateDigit(hour[1], timeHour[1]);
  }

  //updating minutes
  updateDigit(minute[0], timeMinute[0]);
  updateDigit(minute[1], timeMinute[1]);

  //updating seconds
  updateDigit(second[0], timeSecond[0]);
  updateDigit(second[1], timeSecond[1]);
}

setInterval(updateClock, 1000);
