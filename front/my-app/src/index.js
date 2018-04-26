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
	}

	togglePopup() {
		this.setState({
			showPopup: !this.state.showPopup
		});
	}

	render() {
		return (
				<div className="mainApp">
					<p>l;kdsnfg;lsdkfnv</p>
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
						{close => (
							<div className="modal">
								<a className="close" onClick={close}>
									&times;
								</a>
								<div className="header"> Modal Title </div>
								<div className="content">
									{" "}
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
									Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
									delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
									<br />
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
									commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
									explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
								</div>
								<div className="actions">
									<Popup
										trigger={<button className="button"> Trigger </button>}
										position="top center"
										closeOnDocumentClick
									>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni omnis delectus
              nemo, maxime molestiae dolorem numquam mollitia, voluptate ea, accusamus excepturi
              deleniti ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
									</Popup>
									<button
										className="button"
										onClick={() => {
											console.log('modal closed ')
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
