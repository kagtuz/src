const checkForm = document.querySelector(".login-form");
console.log(checkForm);

checkForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = {};
  formData.forEach((name, value) => {
    if (!name || !value) {
      alert("Заполни форму!");
    } else {
      data[value] = name;
    }
  });
  if (data.email && data.password) {
    console.log(data);
    event.currentTarget.reset();
  }
}