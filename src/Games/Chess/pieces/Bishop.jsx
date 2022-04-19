import React, {useContext} from 'react';
import {convertIndexToPosition, convertPositionToIndex} from "../service";
import {PiecesContext} from "../context";

const Bishop = ({position, onDragStart, onDragEnd, color}) => {
	const pieces = useContext(PiecesContext);
	let availableDirections = {
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


		return moves;
	};

	const iconUrl = color === 'white' ? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg" : 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg';


	return (
		<div
			style={{width: '100%', height: '100%', backgroundImage: `url(${iconUrl})`, cursor: 'grab'}}
			onDragStart={(e) => onDragStart(e, Bishop, position, color, getAvailableMoves())}
			onDragEnd={(e) => onDragEnd(e)}
			draggable={true}
		>
		</div>
	);
};

export default Bishop;