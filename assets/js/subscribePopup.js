const subForms = document.querySelectorAll(".subscribe__forms");

for (let form of subForms) {
  form.email.setAttribute("required", "true");
  form.onsubmit = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (popupTimeoutId) {
      clearTimeout(popupTimeoutId);
    }
    popupText.innerHTML = `Confirmation email sent on ${this.email.value}`;
    popup.style.display = "block";
    popupTimeoutId = setTimeout(() => {
      popup.style.display = "none"
    }, 5000)
    return false;
  }
}


popupIconClose.onclick = function () {
  popup.style.display = "none";
  if (popupTimeoutId) {
    clearTimeout(popupTimeoutId);
  }
}