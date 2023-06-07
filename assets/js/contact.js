const form = document.querySelector('.form');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const phoneInput = document.querySelector('input[name="phone"]');
const radioInput = document.querySelector('input[name="preferences"]');
const checkboxInput = document.querySelector('input[name="checkbox"]');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	let message = '';
	if (!nameInput.value) message += 'name cannot be empty!\n';
	else {
		if (!isNaN(nameInput.value)) message += 'name cannot be numerical!\n';
	}
	if (!emailInput.value) message += 'email cannot be empty!\n';
	else {
		if (
			!(
				emailInput.value.endsWith('@gmail.com') ||
				emailInput.value.endsWith('@binus.ac.id.') ||
				emailInput.value.endsWith('@binus.edu')
			)
		)
			message +=
				'email must be from gmail or binus (gmail.com/binus.ac.id/binus.edu)\n';
	}
	if (!phoneInput.value) message += 'phone cannot be empty!\n';
	else {
		if (isNaN(phoneInput.value))
			message += 'phone number must be numerical!\n';
	}

	if (!radioInput.checked) message += 'choose your preferences!\n';
	if (!checkboxInput.checked)
		message += 'you must agree to receive newsletter!\n';

	if (message) alert(message);
	else {
		alert('Thank you!');
		window.location = '../../index.html';
	}
});
