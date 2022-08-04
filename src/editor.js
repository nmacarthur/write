import { getById, debounce } from './utils.js';
import { setDocumentName } from './document.js';
import valueContainer from './value-container.js';

const title = getById('title');

const [ getEditorValue, setEditorValue ] = valueContainer(getById('editor'));
const [ getTitleValue, setTitleValue ] = valueContainer(title);

title.addEventListener('input', debounce(() => setDocumentName(getTitleValue()), 300));

export { 
    getEditorValue, 
    setEditorValue,
    getTitleValue,
    setTitleValue
}
