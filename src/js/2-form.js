const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: "",
  message: ""
};

const feedbackForm = document.querySelector(".feedback-form");

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  try {
    const parsedData = JSON.parse(savedData);
    formData = { ...formData, ...parsedData };
    feedbackForm.elements.email.value = formData.email || "";
    feedbackForm.elements.message.value = formData.message || "";
  } catch (error) {
    console.error("Помилка парсингу", error);
  }
}

feedbackForm.addEventListener("input", () => {
  formData.email = feedbackForm.elements.email.value.trim();
  formData.message = feedbackForm.elements.message.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

feedbackForm.addEventListener("submit", e => {
  e.preventDefault();

  if (formData.email === "" || formData.message === "") {
    return alert("Fill please all fields");
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  formData = { email: "", message: "" };
  feedbackForm.reset();
});