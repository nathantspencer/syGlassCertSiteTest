console.log('DOC1:' + document.referrer)
console.log('LOC1:' + location.href)

window.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOC2:' + document.referrer)
	console.log('LOC2:' + location.href)
});
