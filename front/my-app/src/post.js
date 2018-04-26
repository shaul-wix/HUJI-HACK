import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './backend'
import {getUserData} from "./backend";

// class UserPost extends React.Component {
// 	render () {
// 		return (
// 			<div class="container">
// 				<img class="imageOne" src ={require('./assets/backgroung-button-test.png')}/>
// 				<img class="imageTwo" src={require('./assets/icon-button-test.png')} width={37} height={37}/>
// 			</div>
// 		);
// 	}
// }

function UserPost(props) {
	const { background, icon, userName, dist } = props;
	return (
		<div>
            <div class="container">
				<img class="imageOne" src ={background}/>
				<img class="imageTwo" src={icon} width={30} height={30}/>
				<div class='userNameDescription'>
					<p class='userName'>Do {userName} a Favor</p>
				</div>
				<div class='distDescription'>
					<p class='dist'>dist</p>
				</div>
				<div class='favorDescription'>
					<p class='favor'>favor</p>
				</div>
				
				
				
				{/* <div class="userName">userName</div> */}
				{/* <div>{userName}</div> */}
				{/* <div>{lastName}</div>
				<div>{dist}</div> */}
			</div>
		</div>

	);
}


const userPost = getUserData();

ReactDOM.render(
	<UserPost background={userPost.back}
			  icon={userPost.icon}
			  userName={userPost.username}
			  dist={userPost.dist}>
	</UserPost>,
	document.getElementById('root')
);
