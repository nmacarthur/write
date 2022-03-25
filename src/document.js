import { 
    getObjectProperty, 
    setObjectProperty
} from './utils.js';

const doc = {
    name: 'Untitled Document',
};

const getDocumentName = () => getObjectProperty(doc)('name');

const setDocumentName = (value) => {
    setObjectProperty(doc)('name')(value);
    document.title = value; 
};

export {
    getDocumentName,
    setDocumentName,
};
