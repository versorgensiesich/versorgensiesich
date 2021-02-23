"use strict";

const body = document.body;
// const forms = document.querySelectorAll(".register__form");
const forms = document.querySelectorAll("form");

const popup = document.createElement("div")
popup.setAttribute("id", "popup-after-reg");

const popupInner = document.createElement("div");
popupInner.setAttribute("id", "popup-after-reg__inner");

const popupIconClose = document.createElement("div")
popupIconClose.setAttribute("id", "icon-close-popup");
popupIconClose.innerHTML = "&times;";

const popupText = document.createElement("div")
popupText.setAttribute("id", "popup-after-reg__text");

popupInner.append(popupIconClose, popupText);
popup.appendChild(popupInner);

body.appendChild(popup)


let popupTimeoutId;

for (let form of forms) {
  form.email.setAttribute("required", "true");
  if (form.name) {
    form.name.setAttribute("required", "true");
  }
  form.onsubmit = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (popupTimeoutId) {
      clearTimeout(popupTimeoutId);
    }
    if (form.checkPrivacy && !form.checkPrivacy.checked) {
      popupText.innerHTML = "You must accept the terms of the agreement"
    } else {
      popupText.innerHTML = `Thanks for your application! We will reply to you within 3 business days for ${this.email.value}`;
    }

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
