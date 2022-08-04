import { saveFile } from './save-file.js';
import { loadFile } from './load-file.js';
import { getById } from './utils.js';

const setup = () => {
    const saveButton = getById('btn--save');
    saveButton.addEventListener('click', saveFile);

    const loadButton = getById('btn--load');
    loadButton.addEventListener('click', loadFile);
}

setup();
