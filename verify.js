function verify(event) {
	const id = idField.value.toUpperCase();
	if (id.startsWith('SY')) {
		window.open(id + '.html', '_self');
	}
	else {
		alert('Certificate ID must begin with "SY"');
	}
	event.preventDefault();
}

window.addEventListener('DOMContentLoaded', (event) => {
	const idField = document.getElementById('idField');
	const form = document.getElementById('verifyForm');
	form.addEventListener('submit', verify);
});
