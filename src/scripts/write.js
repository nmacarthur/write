const { ipcRenderer } = require('electron');
const fs = require('fs'); 
const { resolve } = require('path');

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

		this.DOM.buttonContainer = document.createElement('div')
		this.DOM.buttonContainer.classList.add('btn-container')
		this.DOM.el.appendChild(this.DOM.buttonContainer)


		this.DOM.saveButton = document.createElement('button')
		this.DOM.saveButton.innerText = 'save'
		this.DOM.saveButton.classList.add('btn', 'btn--save')
		this.DOM.buttonContainer.appendChild(this.DOM.saveButton)

		this.DOM.openButton = document.createElement('button')
		this.DOM.openButton.innerText = 'open'
		this.DOM.openButton.classList.add('btn')
		this.DOM.buttonContainer.appendChild(this.DOM.openButton)

		this.DOM.fileBrowser = document.createElement('input')
		this.DOM.fileBrowser.type = 'file'

	}

	attachEvents() {
		this.DOM.saveButton.addEventListener('click', () => {this.onSave()})
		this.DOM.openButton.addEventListener('click', () => {this.onOpen()})
		// ipcRenderer.on('save', () => {
		// 	this.onSave()
		// })
	}
	
	getPath = async () => {
		const result = await ipcRenderer.invoke('select-dirs')

		return result.filePath
	}

	getFile = async () => {
		const result = await ipcRenderer.invoke('select-file');

		return result.filePaths[0]
	}

	onSave = async () => {  
		// Data which will write in a file. 
		let data = this.DOM.textarea.value

		if (this.filepath) {
			fs.writeFile(this.filepath, data, (err) => { 
				    // In case of a error throw err. 
				    if (err) throw err; 
			})
		}else {
			await this.getPath().then(response => {
				this.filepath = response;
				fs.writeFile(response, data, (err) => { 
				    // In case of a error throw err. 
				    if (err) throw err; 
				}) 
			});
		}
	}

	onOpen = async () => {
		await this.getFile().then(response => {
			fs.readFile(response, "utf8", (err, data) => { 
			    // In case of a error throw err. 
			    if (err) throw err; 
				this.filepath = response;				
				this.data = data;
				this.updateText()
			})
		})
	}

	updateText = () => {
		this.DOM.textarea.value = this.data
	}
}

module.exports = Write