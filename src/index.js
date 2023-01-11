import { saveFile } from './save-file.js';
import { loadFile } from './load-file.js';
import { getById } from './utils.js';

const setup = () => {
    const saveButton = getById('btn--save');
    saveButton.addEventListener('click', saveFile);

    const loadButton = getById('btn--load');
    loadButton.addEventListener('click', loadFile);

    addEventListener('keydown', ({ code, ctrlKey }) => {
        if (code === 'Slash' && ctrlKey) {
           console.log('shortcut triggered');
           document.body.classList.toggle('mode--focus');
        }
    })
}

setup();
