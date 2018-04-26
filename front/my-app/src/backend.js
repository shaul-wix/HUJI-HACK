// const getUserData = () => {
//
// 	const icon = require("./assets/icon-button-test.png");
// 	const background = require("./assets/backgroung-button-test.png");
// 	return {
// 		back: background,
// 		icon: icon,
// 		username: 'Shaul',
// 		lastname: 'Robinov',
// 		dist: 123
// 	};
// };

const getFeedData = () => {
	const icon = require("./assets/icon-button-test.png");
	const background = require("./assets/backgroung-button-test.png");
	return [{
		back: background,
		icon: icon,
		username: 'Shaul',
		lastname: 'Robinov',
		dist: 123
	},
	{
		back: background,
		icon: icon,
		username: 'Shira',
		lastname: 'Werman',
		dist: 456
	}];
};

export {
	getFeedData
};




