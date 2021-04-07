const formCaller = document.querySelectorAll(".form-caller"),
  overlay = document.querySelector(".overlay"),
  modal = document.querySelector(".modal"),
  modalClose = document.querySelector(".modal__close"),
  formSubmit = document.querySelector("btn_modal"),
  body = document.querySelector("body");

function openModal(event) {
  event.preventDefault();
  overlay.style.display = "block";
  body.style.overflowY = "hidden";
}

function closeModal(event) {
  if (
    event.target === modalClose ||
    event.target === formSubmit ||
    event.target === overlay
  ) {
    overlay.style.display = "none";
    body.style.overflowY = "auto";
  }
}

formCaller.forEach((item) => {
  item.addEventListener("click", openModal);
});

overlay.addEventListener('click', closeModal);