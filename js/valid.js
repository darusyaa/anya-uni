let form = document.querySelector(".js-form"),
  formInputs = document.querySelectorAll(".js-input"),
  formInputsNecessarily = document.querySelectorAll(".js-input-necessarily"),
  formInputPhone = document.querySelector(".js-input-phone"),
  formInputEmail = document.querySelector(".js-input-email");

form.onsubmit = function () {
  let emailVal = formInputEmail.value,
    phoneVal = formInputPhone.value,
    emptyInputs = Array.from(formInputsNecessarily).filter(
      (input) => input.value === ""
    );

  formInputsNecessarily.forEach(function (input) {
    if (input.value === "") {
      input.classList.add("error");
    } else {
      input.classList.delete("error");
    }
  });

  if (emptyInputs.length != 0) {
    return false;
  }
};
