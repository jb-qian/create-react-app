const fs = require('fs');
const path = require('path');

const css = require('./css');

fs.writeFile(path.resolve(__dirname, '../../src/index.css'), css, err => {
	if (err) {
		throw err;
	}
	console.log('pc版 index.css 初始化成功');
})