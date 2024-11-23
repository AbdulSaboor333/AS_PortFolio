// Add smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Function to open the modal and populate data
function openModal(projectName) {
  const modal = document.getElementById("portfolioModal");
  modal.classList.remove("hidden");
  modal.classList.add("slide-down-animation"); // Trigger animation when modal opens

  // Set data for each project
  const projects = {
    "Virtual Assistant": {
      imgSrc: "vs.png",
      techUsed: "HTML, CSS, JavaScript",
      description: "This project is a web-based virtual assistant built using HTML, CSS, and JavaScript. The assistant performs tasks by listening to and processing voice commands, offering users a hands-free, interactive experience. ",
      projectLink: "https://abdulsaboor333.github.io/virtua_assistant/",
    },
    "Chatbot": {
      imgSrc: "CB.png",
      techUsed: "HTML, CSS, JavaScript",
      description: "This project is a basic chatbot designed to perform simple tasks based on user commands, created using HTML, CSS, and JavaScript. The chatbot allows users to interact by typing commands, and it responds accordingly to perform predefined actions.",
      projectLink: "https://abdulsaboor333.github.io/chat_bot/",
    },
    "Puzzle Game": {
      imgSrc: "PG.png",
      techUsed: "HTML, CSS, JavaScript",
      description: "This project is a fun and interactive puzzle game created with HTML, CSS, and JavaScript. The game challenges users to solve puzzles by arranging pieces, testing their problem-solving skills while providing an engaging experience.",
      projectLink: "https://abdulsaboor333.github.io/Puzzle_Game/",
    },
    "Currency Converter ": {
      imgSrc: "CC.png",
      techUsed: "HTML, CSS, JavaScript",
      description: "This project is a currency converter web application designed with a responsive interface using HTML, CSS, and JavaScript. It allows users to convert between multiple currencies with real-time exchange rates, providing an intuitive and accessible experience on any device..",
      projectLink: "https://abdulsaboor333.github.io/currency_convertor/",
    },
    "NoteKeeper": {
      imgSrc: "NK.png",
      techUsed: "HTML, CSS, JavaScript",
      description: "The NoteKeeper Web App is a powerful, feature-rich, and visually appealing tool designed for managing your notes efficiently. Built using HTML, CSS, and JavaScript, it provides a seamless user experience with an emphasis on modern UI design and interactivity.",
      projectLink: "https://abdulsaboor333.github.io/Note_Keeper/",
    },
    "Admin Panel": {
      imgSrc: "adp.png",
      techUsed: "HTML, CSS, JavaScript",
      description: "A responsive admin panel created using HTML and CSS, designed for optimal viewing on various devices. The layout includes adaptive elements for seamless user experience, making it a versatile choice for managing projects and content efficiently..",
      projectLink: "https://abdulsaboor333.github.io/admin_panel/",
    },
    
    "3D PortFolio": {
        imgSrc: "3dPF.png",
        techUsed: "HTML, CSS, JavaScript",
        description: "A 3D portfolio website featuring responsive design, built with HTML, CSS, and JavaScript. This project showcases interactive 3D elements and smooth transitions, creating an engaging user experience on any device.",
        projectLink: "https://abdulsaboor333.github.io/3D-Portfolio-design/",
      },
      
    "Login and SignUp": {
        imgSrc: "LS.png",
        techUsed: "HTML, CSS, JavaScript",
        description: "This repository contains a modern and responsive login and signup form design built using HTML, CSS, and JavaScript. The forms feature a clean and user-friendly interface with smooth transitions and validation functionality for an enhanced user experience.",
        projectLink: "https://abdulsaboor333.github.io/Login_SignUp/",
      },
  };

  // Populate modal with project data
  const project = projects[projectName];
  document.getElementById("modalProjectName").textContent = projectName;
  document.getElementById(
    "modalTechUsed"
  ).textContent = `Technology used: ${project.techUsed}`;
  document.getElementById("modalDescription").textContent = project.description;
  document.getElementById("modalImage").src = project.imgSrc;
  document.getElementById("modalProjectLink").href = project.projectLink;
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById("portfolioModal");
  modal.classList.add("hidden");
  modal.classList.remove("slide-down-animation");
}

const slider = document.querySelector(".testimonial-slider");
const testimonials = document.querySelectorAll(".testimonial");
let index = 0;

// Function to show the current testimonial
function showTestimonial() {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

// Next button event listener
document.getElementById("next").addEventListener("click", () => {
  index++;
  if (index >= testimonials.length) {
    index = 0; // Reset to first testimonial
  }
  showTestimonial();
});

// Previous button event listener
document.getElementById("prev").addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = testimonials.length - 1; // Go to last testimonial
  }
  showTestimonial();
});

// Auto slide functionality (optional)
setInterval(() => {
  index++;
  if (index >= testimonials.length) {
    index = 0;
  }
  showTestimonial();
}, 5000); // Change slide every 5 seconds

const whatsappNumber = "923115811866"; // Your WhatsApp number in international format

// Ensure the DOM is fully loaded before attaching the event listener
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Prepare the message
      const whatsappMessage = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
      );

      // Open WhatsApp with the message
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;

      // Alert to check if the URL is correct
      alert(`Opening WhatsApp with this URL: ${whatsappUrl}`);

      // Open in a new tab
      window.open(whatsappUrl, "_blank");
    });
});
