const submitButton = document.getElementById("submitBtn");
const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const acceptPolicy = document.getElementById("acceptPolicy");

const genderGroup = document.getElementById("genderGroup");

const resetForm = () => {
  nameInput.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
  acceptPolicy.checked = false;
};

const isEmpty = (value) => {
  return (
    value === "" ||
    value.trim() === "" ||
    value === null ||
    value === undefined ||
    value.length <= 0
  );
};

const checkEmptyFields = () => {
  return (
    isEmpty(nameInput.value) ||
    isEmpty(email.value) ||
    isEmpty(subject.value) ||
    isEmpty(message.value) ||
    !acceptPolicy.checked
  );
};

const generateMessage = () => {
  const selectedRadio = genderGroup.querySelector(
    'input[name="genderRadioGroup"]:checked'
  );
  const selectedLabel = genderGroup.querySelector(
    `label[for="${selectedRadio.id}"]`
  );
  const selectedText = selectedLabel.textContent;
  return `Sender name: ${
    nameInput.value
  } (${selectedText})%0D%0ASender email address: ${
    email.value
  }%0D%0A%0D%0A${message.value.replaceAll("\n", "%0D%0A")}`;
};

const generateMailToLink = () => {
  const mailToLink = `mailto:florian00m14@gmail.com?subject=${
    subject.value
  }&body=${generateMessage()}`;
  return mailToLink;
};

const sendEmail = (event) => {
  event.preventDefault();
  if (checkEmptyFields()) {
    alert("Kérlek töltsd ki az összes mezőt!");
    return;
  }

  window.location.href = generateMailToLink();
  resetForm();
};

submitButton.addEventListener("click", sendEmail);
