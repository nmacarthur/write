import { getById, debounce } from './utils.js';
import { setDocumentName } from './document.js';

const editor = getById('editor');
const title = getById('title');

const getEditorValue = () => editor.value;

const setEditorValue = (value) => editor.value = value;

const getTitleValue = () => title.value;

const setTitleValue = (value) => title.value = value;

title.addEventListener('input', debounce(() =>
    setDocumentName(getTitleValue()), 300));

export { 
    getEditorValue, 
    setEditorValue,
    getTitleValue,
    setTitleValue
}
