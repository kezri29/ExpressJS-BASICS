const path = require('path');
const rootDir = path.dirname(require.main.filename);
module.exports = rootDir;

// path.dirname(require.main.filename) --> much easier to get 
// the path from disk till the main 
// file(here app.js) and exported to 
// be used for routing purpose