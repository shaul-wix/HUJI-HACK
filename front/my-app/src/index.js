import React from 'react';
import ReactDOM from 'react-dom';
import Popup from 'reactjs-popup';
import {getFeedData, getGlobalAssets, getCategoryImage} from "./backend";
import './index.css';
import './backend'

const assets = getGlobalAssets();
function UserPost(props) {
	const {icon, userName, favor, onclickfunc, dist } = props;
	return (
			<div className="postContainer" onClick={onclickfunc}>
				<button className="post">
					<div className="icon">
						<img  src={icon}/>
					</div>
					<div className="postText">
						<p className="favor">{favor}</p>
						<div className="bottomStr">
							<p>Do <span>{userName}</span> a Favor</p>
						</div>
					</div>
					<div className="line">
						<img  src={assets.line}/>
					</div>
					<div className="distDiv">
						<p className="dist">{dist}</p>
						<p className="km">km</p>
					</div>
				</button>
			</div>
	);
}
function TopBar() {
	return(
		<div className="topBar">
			<img src={assets.topBarPink}/>
		</div>
	)
}

function Logo() {
	return(
		<div className="logo">
			<img src={assets.logo}/>
		</div>
	)
}

function Header() {
	return(
		<div>
			<img className="refreshBtn" src={assets.refreshButton}/>
			<p className="nearby">Nearby</p>
		</div>
	);
}

function Footer() {
	return(
		<div className="footer">
			<div className="imgContainer">
				<img src={assets.blueDot}/>
				<img src={assets.whiteDot}/>
			</div>
		</div>
	)
}

class AppFeed extends React.Component {
	constructor() {
		super();
		this.state = {
			showPopup: false,
			currentPostData: null
		};
		this.feedData = getFeedData();
	}

	togglePopup() {
		this.setState({
			showPopup: !this.state.showPopup,
			currentPostData: this.curPost
		});
	}

	render() {
		return (
			<div className="mainApp">
				<Header/>
				<div className="feed">
					{this.feedData.map((singlePost, index) => {
						this.curPost = singlePost;
						return <UserPost key={index}
										 icon={getCategoryImage(singlePost.category)}
										 userName={singlePost.userName}
										 dist={singlePost.distance}
										 favor={singlePost.header}
										 onclickfunc={this.togglePopup.bind(this)}>
						</UserPost>;

					})}
					<Popup
						   open={this.state.showPopup}
						   modal>
						{close => (
							<div className="modal">
								<a className="close" onClick={close}>
									&times;
								</a>
								<div className="content">
									<img src={assets.carIcon}/>
									<p>{this.state.currentPostData.dist} km away from you</p>
									<p>{this.state.currentPostData.favor}</p>
									<p>Added by {this.state.currentPostData.username}</p>
									<p>{this.state.currentPostData.description}</p>
								</div>
								<div className="actions">
									<button
										className="doFavor"
										onClick={() => {
											close()
										}}
									>
										close modal
									</button>
								</div>
							</div>
						)}
					</Popup>
				</div>
			</div>
		)
	}

}

ReactDOM.render(
	<div>
		<TopBar/>
		<Logo/>
		<AppFeed />
		<Footer/>
	</div>,
	document.getElementById('root')
);

//width = 868, height = 1206