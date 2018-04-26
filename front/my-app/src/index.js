import React from 'react';
import ReactDOM from 'react-dom';
import Popup from 'reactjs-popup';
import {getFeedData} from "./backend";
import './index.css';
import './backend'

function UserPost(props) {
	const {background, icon, userName, lastName, dist, onclickfunc } = props;
	return (
		<div className='a' onClick={onclickfunc}>
			<img alt="" src={icon}/>
			<img alt="" src={background} width={300} height={50} />
			<div>{userName}</div>
			<div>{lastName}</div>
			<div>{dist}</div>
		</div>

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
			<div>
				{this.feedData.map((singlePost, index) => {
					return <UserPost key={index}
									 background={singlePost.back}
									 icon={singlePost.icon}
									 userName={singlePost.username}
									 lastName={singlePost.lastname}
									 dist={singlePost.dist}
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
	<AppFeed />,
	document.getElementById('root')
);
