import {
    fileOpen,
} from './vendor/browser-fs-access.js';

import { 
    setEditorValue, 
    setTitleValue 
} from './editor.js';

import {
    setDocumentName
} from './document.js';

async function processFile(file) {
    const { name } = file;
    const text = await file.text();

    return name.match('.txt')
        ? { name: name.replace('.txt',''), text } 
        : { name, text }
}

async function loadFile() {
    const file = await fileOpen({
        mimeTypes: ['.txt'],
    });

    const  {
        name,
        text
    } = await processFile(file);

    setEditorValue(text);
    setTitleValue(name);
    setDocumentName(name);
}

export { loadFile }
