document.addEventListener("DOMContentLoaded", function () {
  let currentStep = 0;
  const formSteps = document.querySelectorAll(".form-step");
  const steps = document.querySelectorAll(".step");

  function updateStep() {
    formSteps.forEach((step, index) => {
      step.classList.toggle("active", index === currentStep);
    });

    steps.forEach((step, index) => {
      step.classList.toggle("active", index === currentStep);
    });
  }

  document.querySelectorAll(".next-step").forEach((button) => {
    button.addEventListener("click", function () {
      if (currentStep < formSteps.length - 1) {
        currentStep++;
        updateStep();
      }
    });
  });

  document.querySelectorAll(".prev-step").forEach((button) => {
    button.addEventListener("click", function () {
      if (currentStep < formSteps.length) {
        currentStep--; // Move to the next step
        updateStep();
      }
    });
  });
  document.querySelectorAll(".skip-step").forEach((button) => {
    button.addEventListener("click", function () {
      if (currentStep < formSteps.length - 1) {
        currentStep++; // Move to the next step
        updateStep();
      }
    });
  });

  // NEW: Clickable step navigation
  steps.forEach((step, index) => {
    step.addEventListener("click", function () {
      if (index <= currentStep + 1) {
        // Allow only past & next steps
        currentStep = index;
        updateStep();
      }
    });
  });

  updateStep();
});

// Steps email wizard js code in automation modal
const automationModalEmail = document.getElementById("EmailautomationModal");
automationModalEmail.addEventListener("hidden.bs.modal", () => {
  setActiveStepEmail(1);
});

const steps = document.querySelectorAll(".email-step");
const contents = document.querySelectorAll(".step-content");

function setActiveStepEmail(stepNum) {
  steps.forEach((step, index) => {
    const circle = step.querySelector(".step-circle");
    const text = step.querySelector(".step-subtext");
    if (index < stepNum - 1) {
      step.classList.add("completed");
      step.classList.remove("active");
      text.textContent = "Completed";
      circle.textContent = index + 1;
    } else if (index === stepNum - 1) {
      step.classList.add("active");
      step.classList.remove("completed");
      text.textContent = "In Progress";
      circle.textContent = index + 1;
    } else {
      step.classList.remove("active", "completed");
      text.textContent = "Pending";
      circle.textContent = index + 1;
    }
  });
  contents.forEach((content, idx) => {
    content.classList.toggle("hidden", idx !== stepNum - 1);
  });
}

document.getElementById("nextBtn").addEventListener("click", () => {
  setActiveStepEmail(2);
});

document.getElementById("backBtn").addEventListener("click", () => {
  setActiveStepEmail(1);
});

document.getElementById("create-own").addEventListener("click", () => {
  setActiveStepEmail(3);
});

// Steps sms wizard js code in automation modal
const automationModalSMS = document.getElementById("SMSautomationModal");
automationModalSMS.addEventListener("hidden.bs.modal", () => {
  setActiveStepSms(1);
});

const steps1 = document.querySelectorAll(".sms-step");
const contents1 = document.querySelectorAll(".step-content1");

function setActiveStepSms(stepNum) {
  steps1.forEach((step1, index) => {
    const circle1 = step1.querySelector(".step-circle");
    const text1 = step1.querySelector(".step-subtext");

    if (index < stepNum - 1) {
      step1.classList.add("completed");
      step1.classList.remove("active");
      text1.textContent = "Completed";
    } else if (index === stepNum - 1) {
      step1.classList.add("active");
      step1.classList.remove("completed");
      text1.textContent = "In Progress";
    } else {
      step1.classList.remove("active", "completed");
      text1.textContent = "Pending";
    }

    circle1.textContent = index + 1;
  });

  contents1.forEach((content, idx) => {
    content.classList.toggle("hidden", idx !== stepNum - 1);
  });
}

document.getElementById("smsnextBtn").addEventListener("click", () => {
  setActiveStepSms(2);
});

document.getElementById("smsbackBtn").addEventListener("click", () => {
  setActiveStepSms(1);
});

// Steps whatsapp wizard js code in automation modal
const automationModalWhatsapp = document.getElementById(
  "WhatsAppautomationModal"
);
automationModalWhatsapp.addEventListener("hidden.bs.modal", () => {
  setActiveStepWhatsApp(1);
});
const steps2 = document.querySelectorAll(".whatsapp-step");
const contents2 = document.querySelectorAll(".step-content2");

function setActiveStepWhatsApp(stepNum) {
  steps2.forEach((step2, index) => {
    const circle2 = step2.querySelector(".step-circle");
    const text2 = step2.querySelector(".step-subtext");

    if (index < stepNum - 1) {
      step2.classList.add("completed");
      step2.classList.remove("active");
      text2.textContent = "Completed";
    } else if (index === stepNum - 1) {
      step2.classList.add("active");
      step2.classList.remove("completed");
      text2.textContent = "In Progress";
    } else {
      step2.classList.remove("active", "completed");
      text2.textContent = "Pending";
    }

    circle2.textContent = index + 1;
  });

  contents2.forEach((content, idx) => {
    content.classList.toggle("hidden", idx !== stepNum - 1);
  });
}

document.getElementById("whatsAppnextBtn").addEventListener("click", () => {
  setActiveStepWhatsApp(2);
});

document.getElementById("whatsAppbackBtn").addEventListener("click", () => {
  setActiveStepWhatsApp(1);
});

// script for active drip-bar toggle

document.getElementById("toggle-btn").addEventListener("click", function () {
  document.getElementById("full-content").classList.add("hidden");
  document.getElementById("collapsed-content").classList.remove("hidden");
});

document.getElementById("expand-btn").addEventListener("click", function () {
  document.getElementById("full-content").classList.remove("hidden");
  document.getElementById("collapsed-content").classList.add("hidden");
});
document.getElementById("toggle-btn-sm").addEventListener("click", function () {
  document.getElementById("full-content-sm").classList.add("hidden");
  document.getElementById("collapsed-content-sm").classList.remove("hidden");
});

document.getElementById("expand-btn-sm").addEventListener("click", function () {
  document.getElementById("full-content-sm").classList.remove("hidden");
  document.getElementById("collapsed-content-sm").classList.add("hidden");
});

// Filter Dropdown code

function setupSearchAndCheckboxBehavior(searchInputId, listId) {
  const searchInput = document.getElementById(searchInputId);
  const checkboxes = document.querySelectorAll(`#${listId} .form-check-input`);

  // Filter the checkbox list based on the search input
  searchInput.addEventListener("input", function () {
    const searchValue = this.value.toLowerCase().trim();
    checkboxes.forEach((checkbox) => {
      const label = checkbox.nextElementSibling.textContent.toLowerCase();
      checkbox.parentElement.style.display = label.includes(searchValue)
        ? ""
        : "none";
    });
  });

  // Clear the search input when any checkbox is selected
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      searchInput.value = "";
    });
  });
}

// Setup for all the search and checkbox combinations

setupSearchAndCheckboxBehavior("tagSearch", "tagList");
setupSearchAndCheckboxBehavior("citySearch", "cityList");
setupSearchAndCheckboxBehavior("referenceSearch", "referenceList");
setupSearchAndCheckboxBehavior("EngineSearch", "EngineList");

// ================ Team Acccess & Permission Script For Wizard ==============

// // Next button functionality
// document.querySelectorAll(".next-btn").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const currentStep = document.querySelector(".step-content:not(.d-none)");
//     const nextStep = currentStep.nextElementSibling;

//     if (nextStep) {
//       currentStep.classList.add("d-none");
//       nextStep.classList.remove("d-none");

//       const stepNumber = parseInt(nextStep.classList[1].split("-")[1]);
//       document
//         .querySelectorAll(".step")
//         .forEach((s) => s.classList.remove("active"));
//       document
//         .querySelector(`.step[data-step="${stepNumber}"]`)
//         .classList.add("active");
//     }
//   });
// });

// // Previous button functionality
// document.querySelectorAll(".prev-btn").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const currentStep = document.querySelector(".step-content:not(.d-none)");
//     const prevStep = currentStep.previousElementSibling;

//     if (prevStep) {
//       currentStep.classList.add("d-none");
//       prevStep.classList.remove("d-none");

//       const stepNumber = parseInt(prevStep.classList[1].split("-")[1]);
//       document
//         .querySelectorAll(".step")
//         .forEach((s) => s.classList.remove("active"));
//       document
//         .querySelector(`.step[data-step="${stepNumber}"]`)
//         .classList.add("active");
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   // Next button functionality
//   document.querySelectorAll(".next-btn").forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const currentStep = document.querySelector(".step-content:not(.d-none)");
//       let nextStep = currentStep.nextElementSibling;

//       while (nextStep && !nextStep.classList.contains("step-content")) {
//         nextStep = nextStep.nextElementSibling;
//       }

//       if (nextStep) {
//         currentStep.classList.add("d-none");
//         nextStep.classList.remove("d-none");

//         const stepClass = Array.from(nextStep.classList).find(cls => cls.startsWith("step-"));
//         const stepNumber = parseInt(stepClass.split("-")[1]);

//         document.querySelectorAll(".step").forEach((s) => s.classList.remove("active"));
//         document.querySelector(`.step[data-step="${stepNumber}"]`).classList.add("active");

//         document.querySelectorAll(".active-line").forEach((line, i) => {
//           line.classList.toggle("active", i < stepNumber - 1);
//         });
//       }
//     });
//   });

//   // Previous button functionality
//   document.querySelectorAll(".prev-btn").forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const currentStep = document.querySelector(".step-content:not(.d-none)");
//       let prevStep = currentStep.previousElementSibling;

//       while (prevStep && !prevStep.classList.contains("step-content")) {
//         prevStep = prevStep.previousElementSibling;
//       }

//       if (prevStep) {
//         currentStep.classList.add("d-none");
//         prevStep.classList.remove("d-none");

//         const stepClass = Array.from(prevStep.classList).find(cls => cls.startsWith("step-"));
//         const stepNumber = parseInt(stepClass.split("-")[1]);

//         document.querySelectorAll(".step").forEach((s) => s.classList.remove("active"));
//         document.querySelector(`.step[data-step="${stepNumber}"]`).classList.add("active");

//         document.querySelectorAll(".active-line").forEach((line, i) => {
//           line.classList.toggle("active", i < stepNumber - 1);
//         });
//       }
//     });
//   });
// });
