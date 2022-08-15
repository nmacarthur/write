import { fileSave } from './vendor/browser-fs-access.js';
import { getEditorValue } from './editor.js';
import { getDocumentName } from './document.js';

async function saveFile() {
    const content = getEditorValue();

    const file = new Blob([content], { type: "text/plain" });

    const fileName = getDocumentName();

    await fileSave(file, {
        fileName,
        accept: {
            'text/plain': ['.txt'],
        }
    })
}

export { saveFile }
