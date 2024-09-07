const timelineData = [
  {
    year: 2018,
    content:
      "We are one of India's leading drone firms in providing end-to-end Drone Solutions.",
    image: "https://igdrones.com/assets/img/svg/whiteicon/IG%20Simulator.webp",
  },
  {
    year: 2019,
    content: "Expanded our services to include aerial photography and mapping.",
    image: "https://igdrones.com/assets/img/product/group-359.png",
  },
  {
    year: 2020,
    content: "Launched AI-powered drone analytics platform.",
    image: "https://igdrones.com/assets/img/product/group-358.png",
  },
  {
    year: 2021,
    content: "Partnered with government for disaster management solutions.",
    image: "https://igdrones.com/assets/img/Icons/Industry-leading-drones/Skyhawk.png",
  },
  {
    year: 2022,
    content: "Introduced autonomous drone delivery systems.",
    image:
      "https://igdrones.com/assets/img/Icons/Industry-leading-drones/jaga.png",
  },
  {
    year: 2023,
    content: "Reached 1000+ successful drone missions milestone.",
    image:
      "https://igdrones.com/assets/img/Icons/Industry-leading-drones/ig-kishan.png",
  },
  {
    year: 2024,
    content: "Expanding internationally with offices in 5 countries.",
    image:
      "https://igdrones.com/assets/img/Icons/Industry-leading-drones/Skyhawk.png",
  },
];

const timeline = document.querySelector(".timeline");
const timelineContent = document.querySelector(".timeline-content");
const airplane = document.querySelector(".airplane");
const progressBar = document.querySelector(".timeline-progress");

let currentIndex = 0;

timelineData.forEach((data, index) => {
  const point = document.createElement("div");
  point.className = "timeline-point";
  point.style.left = `${index * (100 / (timelineData.length - 1))}%`;

  point.addEventListener("click", () => {
    currentIndex = index;
    updateTimeline();
  });

  timeline.appendChild(point);
});

function updateTimeline() {
  const points = document.querySelectorAll(".timeline-point");
  points.forEach((p, i) => {
    if (i <= currentIndex) {
      p.classList.add("active");
      p.style.backgroundColor = "#0000ff";
    } else {
      p.classList.remove("active");
      p.style.backgroundColor = "#808080";
    }
  });

  const newLeft = currentIndex * (100 / (timelineData.length - 1));
  airplane.style.left = `${newLeft}%`;
  airplane.style.animation = "none";
  airplane.offsetHeight; // Trigger reflow
  airplane.style.animation = "fly 1s ease";

  progressBar.style.width = `${newLeft}%`;

  timelineContent.innerHTML = `
          <img src="${timelineData[currentIndex].image}" alt="${timelineData[currentIndex].year}" class="timeline-image">
          <h3>${timelineData[currentIndex].year}</h3>
          <p>${timelineData[currentIndex].content}</p>
      `;
  timelineContent.classList.remove("active");
  setTimeout(() => timelineContent.classList.add("active"), 50);
}

// Activate the first point by default
updateTimeline();
