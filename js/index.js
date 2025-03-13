// const settingsOpenBtn = document.getElementById('settings-btn')

// settingsOpenBtn.onclick = function () {
// 	window.location.href = '../pages/settings.html'
// }
function saveFile() {
	const text = document.getElementById('editor').value
	const fileName = document.getElementById('fileName').value

	// Create a blob with the text content
	const blob = new Blob([text], { type: 'text/plain' })

	// Create a download link
	const downloadLink = document.createElement('a')
	downloadLink.href = URL.createObjectURL(blob)
	downloadLink.download = fileName

	// Append to body, click, and remove
	document.body.appendChild(downloadLink)
	downloadLink.click()
	document.body.removeChild(downloadLink)

	// Clean up the URL object
	URL.revokeObjectURL(downloadLink.href)
}
