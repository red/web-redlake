const requireModule = require.context('.', false, /\.js$/); // extract js files inside components folder

const modules = {};

requireModule.keys().forEach(fileName => {
	// leave out this index file
	if (fileName === './index.js') {
		return;
	}

	const moduleName = fileName.replace(/(\.\/|\.js)/g, '');

	modules[moduleName] = requireModule(fileName).default;
});

export default modules;
