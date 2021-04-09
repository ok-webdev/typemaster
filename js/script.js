const formCaller = document.querySelectorAll(".form-caller"),
  overlay = document.querySelector(".overlay"),
  modal = document.querySelector(".modal"),
  modalClose = document.querySelector(".modal__close"),
  formSubmit = document.querySelector("btn_modal"),
  body = document.querySelector("body");
  inputs = document.querySelectorAll('input');

function openModal(event) {
  event.preventDefault();
  window.scrollTo(0, 0);
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
    inputs.forEach(item => item.value = '');
  }
}

formCaller.forEach((item) => {
  item.addEventListener("click", openModal);
});

overlay.addEventListener('click', closeModal);

inputs.forEach(item => {
  item.addEventListener('invalid', (e) => {
    e.preventDefault();
    item.placeholder = 'Please fill in this field';
  })
});

// iMask 

const phoneMask = IMask(
  document.getElementById('phone'), {
    mask: '+{7}(000)000-00-00'
  });
