const STORAGE_KEY = 'feedback-form-state';
const formData = {
    email: "",
    message: ""
    
}

const feedbackForm = document.querySelector(".feedback-form");

feedbackForm.addEventListener("input", e => {
    formData.email = feedbackForm.elements.email.value.trim();
    formData.message = feedbackForm.elements.message.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

})

feedbackForm.addEventListener("submit", e => {
    if (formData.email === "" || formData.message === "") {
        return alert("Fill please all fields");
    }
    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    formData = { email: "", message: "" };
    feedbackForm.reset();
})
    
document.addEventListener("DOMContentLoaded", () => {
    const data = loadFormLS(STORAGE_KEY);
    if (!data) return;

    feedbackForm.elements.email.value = data.email;
    feedbackForm.elements.message.value = data.message;
})

function loadFormLS(key) {
    const jsonData = localStorage.getItem(key);
    try {
        return JSON.parse(jsonData);
    } catch (error) {
        return null;
    }
}