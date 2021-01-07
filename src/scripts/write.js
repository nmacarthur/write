const fs = require('fs'); 
const { resolve } = require('path');

const getPath = async () => {
	const result = await ipcRenderer.invoke('select-dirs')

	return result.filePath
}


class Write {
	constructor() {
		
	}

	init(el){
		this.DOM = {
			el,
		}
		
		this.addControls()
		this.attachEvents()
	}

	addControls() {
		this.DOM.textarea = document.createElement('textarea')
		this.DOM.textarea.setAttribute('placeholder', 'Write something...')
		this.DOM.el.appendChild(this.DOM.textarea)
		this.DOM.textarea.focus()

		this.DOM.logo = document.createElement('h1')
		this.DOM.logo.innerText = 'write'
		this.DOM.logo.classList.add('logo')
		this.DOM.el.appendChild(this.DOM.logo)

		this.DOM.saveButton = document.createElement('button')
		this.DOM.saveButton.innerText = 'save'
		this.DOM.saveButton.classList.add('btn', 'btn--save')
		this.DOM.el.appendChild(this.DOM.saveButton)

		this.DOM.fileBrowser = document.createElement('input')
		this.DOM.fileBrowser.type = 'file'

	}

	attachEvents() {
		this.DOM.saveButton.addEventListener('click', () => {this.onSave()})
	}

	onSave = async () => {  
		// Data which will write in a file. 
		let data = this.DOM.textarea.value

		await getPath().then(response => {
			fs.writeFile(response, data, (err) => { 
				    // In case of a error throw err. 
				    if (err) throw err; 
				}) 
		});

	}

}

module.exports = Write