function showkey(e) {
	// display key code on screen
	let value = '#value'
	let key = '#key'
	let description = '#description'
	let card = '.card'
	document.querySelector(value).innerHTML = e.keyCode
	// display grahic button on screen
	if (e.key !== ' ') {
		document.querySelector(key).innerHTML = e.key
	} else {
		document.querySelector(key).innerHTML = e.code
	}
	//hide pre data
	document.querySelector(description).style.display = 'none'
	document.querySelector(card).style.display = 'inline-block'
}
window.addEventListener('keydown', showkey)
