const form = document.querySelector('#registrationForm');
const nameInput = document.querySelector('#playerName');
const phoneInput = document.querySelector('#phone');
const matchInput = document.querySelector('#matchSelect');
const message = document.querySelector('#message');
const preview = document.querySelector('#preview');

function createPlayerFromForm() {
  return {
    playerName: nameInput.value.trim(),
    phoneNumber: phoneInput.value.trim(),
    selectedMatch: matchInput.value,
    status: 'confirmed',
  };
}

function isFormValid() {
  return form.checkValidity();
}

function handleRegistrationSubmit(event) {
  event.preventDefault();

  if (!isFormValid()) {
    message.textContent = 'Please complete every field correctly.';
    form.reportValidity();
    return;
  }

  const player = createPlayerFromForm();
  message.textContent = 'Player registered successfully for the match.';
  preview.textContent = JSON.stringify(player, null, 2);
}

form.addEventListener('submit', handleRegistrationSubmit);