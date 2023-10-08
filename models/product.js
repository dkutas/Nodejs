const products = [];
const fs = require('fs');
const path = require('path');

module.exports = class Product {
	constructor(t) {
		this.title = t;
	}

	static fetchAll() {
		return products;
	}

	save() {
		const p = path.join(path.dirname(process.mainModule.filename),
			'data',
			'products.json');
		fs.readFile(p, (err, data) => {
			console.log(data);
		});
	}
};
