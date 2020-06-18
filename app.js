const keyOutputEl = document.getElementById('keyOutput')
const keyEl = document.getElementById('key')
const keyCodeEl = document.getElementById('keyCode')
const keyValueEl = document.getElementById('keyValue')

function keyup() {
	key.classList.remove('pressed')
}

function updateKey({ code, key, keyCode }) {
	keyEl.classList.add('pressed')
	keyCodeEl.textContent = keyCode
	if (key !== ' ') {
		keyValueEl.textContent = key
	} else {
		keyValueEl.textContent = code
	}
}

function unhideKeyOutput() {
	keyOutputEl.classList.remove('hide')
	document.body.removeEventListener('keydown', unhideKeyOutput)
}

document.body.addEventListener('keydown', unhideKeyOutput)
document.body.addEventListener('keydown', updateKey)
document.body.addEventListener('keyup', keyup)
