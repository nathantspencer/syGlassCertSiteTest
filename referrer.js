window.addEventListener('DOMContentLoaded', (event) => {
	const slashSplits = location.href.split('/');
	const slashSplitsLength = slashSplits.length;
	const requestedID = slashSplits[slashSplitsLength - 1].split('.')[0];
	document.getElementById('badCert').innerHTML = requestedID;
});



