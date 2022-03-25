import {
    fileOpen,
} from './vendor/browser-fs-access.js';

import { setEditorValue, setTitleValue } from './editor.js';

async function processFile(file) {
    const { name } = file;
    const text = await file.text();
    return { name, text }
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
    setDocumentName(name);
}

export { loadFile }
