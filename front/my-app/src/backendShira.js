const getUserData = () => {

	const icon = require("./assets/icon-button-test.png");
	const background = require("./assets/backgroung-button-test.png");
	return {
		back: background,
		icon: icon,
		username: 'Shaul Robinov',
		dist: 123,
		favor: 'favor'
	};
};

export {
	getUserData
};




