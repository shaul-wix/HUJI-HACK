const getGlobalAssets = () => {
	const refreshButton = require("./assets/refresh-button.png");
	const topBarPink = require("./assets/top-bar-pink.png");
	const logo = require("./assets/logo-small.png");
	const whiteDot = require("./assets/dot-white.png");
	const blueDot = require("./assets/dot-blue.png");
	const houseIcon = require("./assets/house-icon.png");
	const carIcon = require("./assets/car-icon.png");
	const dogIcon = require("./assets/dog-icon.png");

	return {
		refreshButton: refreshButton,
		topBarPink: topBarPink,
		logo: logo,
		blueDot: blueDot,
		whiteDot: whiteDot,
		houseIcon: houseIcon,
		carIcon: carIcon,
		dogIcon: dogIcon
	};

};
const getFeedData = () => {
	return [{
		username: 'Shaul ',
		dist: 123,
		favor: 'favor shaul'
	},{
		username: 'Shaul ',
		dist: 123,
		favor: 'favor shaul'
	},{
		username: 'Shaul ',
		dist: 123,
		favor: 'favor shaul'
	},{
		username: 'Shaul ',
		dist: 123,
		favor: 'favor shaul'
	},{
		username: 'Shaul ',
		dist: 123,
		favor: 'favor shaul'
	},{
		username: 'Shaul ',
		dist: 123,
		favor: 'favor shaul'
	},{
		username: 'Shaul ',
		dist: 123,
		favor: 'favor shaul'
	},{
		username: 'Shaul ',
		dist: 123,
		favor: 'favor shaul'
	},{
		username: 'Shaul ',
		dist: 123,
		favor: 'favor shaul'
	},{
		username: 'Shaul ',
		dist: 123,
		favor: 'favor shaul'
	}
	];
};

export {
	getFeedData,
	getGlobalAssets
};




