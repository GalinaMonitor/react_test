import React, {useContext} from 'react';
import {convertIndexToPosition, convertPositionToIndex} from "../service";
import {PiecesContext} from "../context";

const Rook = ({position, onDragStart, onDragEnd, color}) => {
	const pieces = useContext(PiecesContext);
	let availableDirections = {
		up: true,
		down: true,
		left: true,
		right: true,
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

	const iconUrl = color === 'white' ? "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg" : 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg';


	return (
		<div
			style={{width: '100%', height: '100%', backgroundImage: `url(${iconUrl})`, cursor: 'grab'}}
			onDragStart={(e) => onDragStart(e, Rook, position, color, getAvailableMoves())}
			onDragEnd={(e) => onDragEnd(e)}
			draggable={true}

		>
		</div>
	);
};

export default Rook;