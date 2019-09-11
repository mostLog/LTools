const shell = require('electron').shell;

open = function(url) {
    shell.openExternal(url);
};


