import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class UserPost extends React.Component {
	render () {
		return (
			<div>
				<img alt="" src={require('./assets/backgroung-button-test.png')} />
				<img alt="" src={require('./assets/icon-button-test.png')} width={100} height={50} />
			</div>

		);
	}
}

//
// class Square extends React.Component {
// 	render() {
// 		return (
// 			<button className="square">
// 			{/* TODO */}
// 			</button>
// 	);
// 	}
// }
//
// class Board extends React.Component {
// 	renderSquare(i) {
// 		return <Square />;
// 	}
//
// 	render() {
// 		const status = 'Next player: X';
//
// 		return (
// 			<div>
// 			<div className="status">{status}</div>
// 			<div className="board-row">
// 			{this.renderSquare(0)}
// 		{this.renderSquare(1)}
// 		{this.renderSquare(2)}
// 	</div>
// 		<div className="board-row">
// 			{this.renderSquare(3)}
// 		{this.renderSquare(4)}
// 		{this.renderSquare(5)}
// 	</div>
// 		<div className="board-row">
// 			{this.renderSquare(6)}
// 		{this.renderSquare(7)}
// 		{this.renderSquare(8)}
// 	</div>
// 		</div>
// 	);
// 	}
// }
//
// class Game extends React.Component {
// 	render() {
// 		return (
// 			<div className="game">
// 			<div className="game-board">
// 			<Board />
// 			</div>
// 			<div className="game-info">
// 			<div>{/* status */}</div>
// 			<ol>{/* TODO */}</ol>
// 			</div>
// 			</div>
// 	);
// 	}
// }

// ========================================

// ReactDOM.render(
// <Game />,
// 	document.getElementById('root')
// );

ReactDOM.render(
	<UserPost />,
	document.getElementById('root')
);