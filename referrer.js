window.addEventListener('DOMContentLoaded', (event) => {
	const slashSplits = location.href.split('/');
	const slashSplitsLength = slashSplits.length;
	const requestedID = slashSplits[slashSplitsLength - 1].split('.')[0];

	const badCertSpan = document.getElementById('badCert');
	badCertSpan.innerHTML = requestedID;
	badCertSpan.setAttribute('style', 'font-family: monospace');
});