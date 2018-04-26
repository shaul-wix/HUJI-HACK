
const getFeedData = () => {
	const icon = require("./assets/icon-button-test.png");
	const background = require("./assets/backgroung-button-test.png");
	return [{
		back: background,
		icon: icon,
		username: 'Shaul ',
		dist: 123,
		favor: 'favor shaul'
	},
	{
		back: background,
		icon: icon,
		username: 'Shira',
		dist: 456,
		favor: 'favor shira'
	}];
};

export {
	getFeedData
};




