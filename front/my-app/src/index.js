import React from 'react';
import ReactDOM from 'react-dom';
import Popup from 'reactjs-popup';
import {getFeedData} from "./backend";
import './index.css';
import './backend'

function UserPost(props) {
	const {background, icon, userName, favor, onclickfunc } = props;
	return (
			<div className="postContainer" onClick={onclickfunc}>
				<button className="post">
					<img  src={icon} width={30} height={30}/>
					<div >
						<p>Do {userName} a Favor</p>
					</div>
					<div >
						<p >dist</p>
					</div>
					<div >
						<p style = {{fontWeight: 'bold'}}>{favor}</p>
					</div>
				</button>
			</div>
	);
}

function Header() {
	return(
		<p>Headline</p>
	);
}


class AppFeed extends React.Component {
	constructor() {
		super();
		this.state = {
			showPopup: false
		};
		this.feedData = getFeedData();
		// this.get = get;
	}

	togglePopup() {
		this.setState({
			showPopup: !this.state.showPopup
		});
	}

	render() {
		return (
			<div className="mainApp">
				<p className="nearby">Nearby</p>
				<div className="feed">
					{this.feedData.map((singlePost, index) => {
						return <UserPost key={index}
										 background={singlePost.back}
										 icon={singlePost.icon}
										 userName={singlePost.username}
										 dist={singlePost.dist}
										 favor={singlePost.favor}
										 onclickfunc={this.togglePopup.bind(this)}>
						</UserPost>;

					})}
					<Popup open={this.state.showPopup}
						   modal>
						{/*<div>*/}
							{/*{this.get()}*/}
						{/*</div>*/}
					</Popup>
				</div>
			</div>


		)
	}

}

ReactDOM.render(
	<div>
		<Header/>
		<AppFeed />
	</div>,
	document.getElementById('root')
);
