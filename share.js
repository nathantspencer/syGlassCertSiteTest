async function copyToClipboard(event) {
	try {
		await navigator.clipboard.writeText(window.location.href);
		console.log('Copied ' + window.location.href + ' to clipboard.');
		alert('A link to this page has been copied to the clipboard.');
	}
	catch(err) {
		console.error('Failed to copy text: ', err);
	}
}

window.addEventListener('DOMContentLoaded', (event) => {
	const shareButton = document.getElementById('share');
	shareButton.addEventListener('click', copyToClipboard);
});
