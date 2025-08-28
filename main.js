const clock = document.getElementById("clock");
const hour = Array.from(
  clock.firstElementChild.getElementsByClassName("digit")
);
const minute = Array.from(
  clock.lastElementChild.getElementsByClassName("digit")
);

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

function updateClock() {
  const timeHour = new Date().getHours().toString();
  const timeMinute = new Date().getMinutes().toString().padStart(2, "0") ;
  const timeSecond = new Date().getSeconds().toString().padStart(2, "0");

  if (timeHour.length > 1) {
    Array.from(hour[0].getElementsByClassName("segment")).map(
      (segment, index) => {
        segment.classList.remove("active");
        const config = digit[timeHour[0]][index];
        if (config) {
          segment.classList.add(config);
        }
      }
    );

    Array.from(hour[1].getElementsByClassName("segment")).map(
      (segment, index) => {
        segment.classList.remove("active");
        const config = digit[timeHour[1]][index];
        if (config) {
          segment.classList.add(config);
        }
      }
    );
  } else {
    Array.from(hour[0].getElementsByClassName("segment")).map(
      (segment, index) => {
        segment.classList.remove("active");
      }
    );

    Array.from(hour[1].getElementsByClassName("segment")).map(
      (segment, index) => {
        segment.classList.remove("active");
        const config = digit[timeHour][index];
        if (config) {
          segment.classList.add(config);
        }
      }
    );
  }

  Array.from(minute[0].getElementsByClassName("segment")).map(
    (segment, index) => {
      segment.classList.remove("active");
      const config = digit[timeMinute[0]][index];
      if (config) {
        segment.classList.add(config);
      }
    }
  );

  console.log(timeMinute);

  Array.from(minute[1].getElementsByClassName("segment")).map(
    (segment, index) => {
      segment.classList.remove("active");
      const config = digit[timeMinute[1]][index];
      if (config) {
        segment.classList.add(config);
      }
    }
  );
}

setInterval(updateClock, 100)
