import { fileSave } from './vendor/browser-fs-access.js';
import { getEditorValue } from './editor.js';
import { getDocumentName } from './document.js';

async function saveFile() {
    const content = getEditorValue();

    const file = new Blob([content], { type: "text/plain;charset=utf-8" });

    const fileName = getDocumentName();

    await fileSave(file, {
        fileName,
        extensions: ['.txt'],
    })
}

export { saveFile }
