import React, {useContext} from 'react';
import {convertIndexToPosition, convertPositionToIndex} from "../service";
import {PiecesContext} from "../context";

const Queen = ({position, onDragStart, color}) => {
	const pieces = useContext(PiecesContext);
	let availableDirections = {
		up: true,
		down: true,
		left: true,
		right: true,
		upLeft: true,
		upRight: true,
		downLeft: true,
		downRight: true
	};

	const getAvailableMoves = () => {
		const moves = [];
		const [x, y] = convertPositionToIndex(position);

		const addMove = (x, y) => {
			if (x >= 0 && x < 8 && y >= 0 && y < 8) {
				moves.push(convertIndexToPosition([x, y]));
			}
		};
		for (let i = 1; i < 8; i++) {
			if (availableDirections.upRight) {
				if (pieces[convertIndexToPosition([x + i, y + i])]) {
					if (pieces[convertIndexToPosition([x + i, y + i])].color !== color) {
						addMove(x + i, y + i);
						availableDirections.upRight = false;
					} else {
						availableDirections.upRight = false;
					}
				} else {
					addMove(x + i, y + i);
				}
			}
			if (availableDirections.downLeft) {
				if (pieces[convertIndexToPosition([x - i, y - i])]) {
					if (pieces[convertIndexToPosition([x - i, y - i])].color !== color) {
						addMove(x - i, y - i);
						availableDirections.downLeft = false;
					} else {
						availableDirections.downLeft = false;
					}
				} else {
					addMove(x - i, y - i);
				}
			}
			if (availableDirections.downRight) {
				if (pieces[convertIndexToPosition([x + i, y - i])]) {
					if (pieces[convertIndexToPosition([x + i, y - i])].color !== color) {
						addMove(x + i, y - i);
						availableDirections.downRight = false;
					} else {
						availableDirections.downRight = false;
					}
				} else {
					addMove(x + i, y - i);
				}
			}
			if (availableDirections.upLeft) {
				if (pieces[convertIndexToPosition([x - i, y + i])]) {
					if (pieces[convertIndexToPosition([x - i, y + i])].color !== color) {
						addMove(x - i, y + i);
						availableDirections.upLeft = false;
					} else {
						availableDirections.upLeft = false;
					}
				} else {
					addMove(x - i, y + i);
				}
			}
		}
		for (let i = 1; i < 8; i++) {
			if (availableDirections.right) {
				if (pieces[convertIndexToPosition([x + i, y])]) {
					if (pieces[convertIndexToPosition([x + i, y])].color !== color) {
						addMove(x + i, y);
						availableDirections.right = false;
					} else {
						availableDirections.right = false;
					}
				} else {
					addMove(x + i, y);
				}
			}
			if (availableDirections.left) {
				if (pieces[convertIndexToPosition([x - i, y])]) {
					if (pieces[convertIndexToPosition([x - i, y])].color !== color) {
						addMove(x - i, y);
						availableDirections.left = false;
					} else {
						availableDirections.left = false;
					}
				} else {
					addMove(x - i, y);
				}
			}
			if (availableDirections.up) {
				if (pieces[convertIndexToPosition([x, y + i])]) {
					if (pieces[convertIndexToPosition([x, y + i])].color !== color) {
						addMove(x, y + i);
						availableDirections.up = false;
					} else {
						availableDirections.up = false;
					}
				} else {
					addMove(x, y + i);
				}
			}
			if (availableDirections.down) {
				if (pieces[convertIndexToPosition([x, y - i])]) {
					if (pieces[convertIndexToPosition([x, y - i])].color !== color) {
						addMove(x, y - i);
						availableDirections.down = false;
					} else {
						availableDirections.down = false;
					}
				} else {
					addMove(x, y - i);
				}
			}
		}

		return moves;
	};

	const iconUrl = color === 'white' ? "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg" : 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg';


	return (
		<div
			style={{width: '100%', height: '100%', backgroundImage: `url(${iconUrl})`, cursor: 'grab'}}
			onDragStart={(e) => onDragStart(e, Queen, position, color, getAvailableMoves())}
			draggable={true}
		>
		</div>
	);
};

export default Queen;