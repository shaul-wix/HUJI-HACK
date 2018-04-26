import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class UserPost extends React.Component {
	render () {
		return (
			<div class="container">
				<img class="imageOne" src ={require('./assets/backgroung-button-test.png')}/>
				<img class="imageTwo" src={require('./assets/icon-button-test.png')} width={30} height={30}/>
			</div>
		);
	}
}