const settingsOpenBtn = document.getElementById('settings-btn')
const textarea = document.getElementById('input')
const download = document.getElementById('download-btn')
let textar = textarea.value
let text = JSON.stringify();
settingsOpenBtn.onclick = function () {
	window.location.href = './pages/settings.html'
}

download.onclick = function () {

}


