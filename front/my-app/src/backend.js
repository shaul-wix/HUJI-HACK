const getGlobalAssets = () => {
	const refreshButton = require("./assets/refresh-button.png");
	const topBarPink = require("./assets/top-bar-pink.png");
	const logo = require("./assets/logo-small.png");
	const whiteDot = require("./assets/dot-white.png");
	const blueDot = require("./assets/dot-blue.png");
	const houseIcon = require("./assets/house-icon.png");
	const carIcon = require("./assets/car-icon.png");
	const dogIcon = require("./assets/dog-icon.png");
	const line = require("./assets/line.png");

	return {
		refreshButton: refreshButton,
		topBarPink: topBarPink,
		logo: logo,
		blueDot: blueDot,
		whiteDot: whiteDot,
		houseIcon: houseIcon,
		carIcon: carIcon,
		dogIcon: dogIcon,
		line: line
	};

};

const getCategoryImage = function (category) {
	const assets = getGlobalAssets();
	switch (category){
		case "car":
			return assets.carIcon;
		case "pet":
			return assets.dogIcon;
		case "house":
			return assets.houseIcon;
		default:
			break;
	}
};

const getFeedData = () => {
	return [{
		category: "house",
		header: "HELP moving a couch",
		description: "I found a used couch on the street, can anyone help me get it up to my apartment?",
		distance: 1.2,
		userName: "Shaul Robinov",
		userScore: 150,
		status: 0,
	},
		{
			category: "pet",
			header: "Dog walker wanted",
			description: "I'll be coming home late today, looking for someone who can walk my dog",
			distance: 2.4,
			userName: "Nadav Schweiger",
			userScore: 120,
			status: 1,
		},
		{
			category: "house",
			header: "Clogged sink",
			description: "Water doesn't come down the sink, can someone help unclog it?",
			distance: 2.1,
			userName: "Shira Werman",
			userScore: 115,
			status: 0,
		},
		{
			category: "house",
			header: "Faulty wiring?",
			description: "Our fuse keeps jumping and nothing seems to help... Can someone take a look at the wiring?",
			distance: 2.1,
			userName: "Shira Werman",
			userScore: 115,
			status: 0,
		},
		{
			category: "pet",
			header: "Fish need feeding",
			description: "Can someone help feed my fish today?",
			distance: 0.7,
			userName: "Roee Ovadia",
			userScore: 95,
			status: 1,
		},
		{
			category: "car",
			header: "Dead battery",
			description: "My car battery is dead, looking for someone to help jump start it today",
			distance: 3.4,
			userName: "David Baraban",
			userScore: 95,
			status: 0,
		},
		{
			category: "car",
			header: "Car won't start",
			description: "My car won't start... Really need someone to take a look",
			distance: 5.1,
			userName: "Meir Melcer",
			userScore: 90,
			status: 0,
		},
		{
			category: "house",
			header: "Faulty internet",
			description: "The internet doesn't work and Bezeq don't know why. I tried restarting the router...",
			distance: 1.8,
			userName: "Dan Kovalski",
			userScore: 85,
			status: 0,
		},
		{
			category: "pet",
			header: "Need dog walker",
			description: "Can anyone take my dog out for a walk for me? Even a short one would be great. Also please see cat post",
			distance: 3.3,
			userName: "Shaked Perez",
			userScore: 85,
			status: 0,
		},
		{
			category: "pet",
			header: "Need to feed cat",
			description: "I'm gone for the day, can anyone feed my cat? Also see dog walker post",
			distance: 3.3,
			userName: "Shaked Perez",
			userScore: 85,
			status: 0,
		},
		{
			category: "car",
			header: "No air conditioning",
			description: "My AC blows air but it's not cold at all",
			distance: 8.1,
			userName: "Livne Rosenblum",
			userScore: 65,
			status: 1,
		},
		{
			category: "car",
			header: "FLAT TIRE!!!",
			description: "PLEASE HELP I HAVE A FLAT TIRE AND I DONT KNOW WHAT TO DOOOOOO",
			distance: 3.5,
			userName: "Amit Gabso",
			userScore: 55,
			status: 0,
		},
		{
			category: "pet",
			header: "Feed my iguana",
			description: "I have a pet iguana and I have to feed it but I cant today... plz help",
			distance: 0.3,
			userName: "Karin Weinberg",
			userScore: 10,
			status: 0,
		}];
};

export {
	getFeedData,
	getGlobalAssets,
	getCategoryImage
};




