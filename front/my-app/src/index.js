import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './backend'
import {getUserData} from "./backend";

function UserPost(props) {
	const { background, icon, userName, lastName, dist } = props;
	return (
		<div>
			<img alt="" src={icon} />
			<img alt="" src={background} width={100} height={50} />
			<div>{userName}</div>
			<div>{lastName}</div>
			<div>{dist}</div>
		</div>

	);
}


const userPost = getUserData();

ReactDOM.render(
	<UserPost background={userPost.back}
			  icon={userPost.icon}
			  userName={userPost.username}
			  lastName={userPost.lastname}
			  dist={userPost.dist}>
	</UserPost>,
	document.getElementById('root')
);
