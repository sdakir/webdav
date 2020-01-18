'use strict'

const WEBDAV = require('claudia-api-builder');
const webdav = new WEBDAV();

webdav.get('/', () => {
	return 'WELCOME TO MY WEBDAV UTILITIES APP!'
});

module.exports = webdav;