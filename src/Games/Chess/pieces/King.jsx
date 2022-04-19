import React, {useContext} from 'react';
import {convertIndexToPosition, convertPositionToIndex} from "../service";
import {PiecesContext} from "../context";

const King = ({position, onDragStart, onDragEnd, color}) => {
	const pieces = useContext(PiecesContext);

	const getAvailableMoves = () => {
		const moves = [];
		const [x, y] = convertPositionToIndex(position);

		const addMove = (x, y) => {
			if (x >= 0 && x < 8 && y >= 0 && y < 8) {
				moves.push(convertIndexToPosition([x, y]));
			}
		};

		if (pieces[convertIndexToPosition([x - 1, y - 1])]) {
			if (pieces[convertIndexToPosition([x - 1, y - 1])].color !== color) {
				addMove(x - 1, y - 1);
			}
		} else {
			addMove(x - 1, y - 1);
		}
		if (pieces[convertIndexToPosition([x - 1, y + 1])]) {
			if (pieces[convertIndexToPosition([x - 1, y + 1])].color !== color) {
				addMove(x - 1, y + 1);
			}
		} else {
			addMove(x - 1, y + 1);
		}
		if (pieces[convertIndexToPosition([x, y - 1])]) {
			if (pieces[convertIndexToPosition([x, y - 1])].color !== color) {
				addMove(x, y - 1);
			}
		} else {
			addMove(x, y - 1);
		}
		if (pieces[convertIndexToPosition([x, y + 1])]) {
			if (pieces[convertIndexToPosition([x, y + 1])].color !== color) {
				addMove(x, y + 1);
			}
		} else {
			addMove(x, y + 1);
		}
		if (pieces[convertIndexToPosition([x + 1, y + 1])]) {
			if (pieces[convertIndexToPosition([x + 1, y + 1])].color !== color) {
				addMove(x + 1, y + 1);
			}
		} else {
			addMove(x + 1, y + 1);
		}
		if (pieces[convertIndexToPosition([x + 1, y - 1])]) {
			if (pieces[convertIndexToPosition([x + 1, y - 1])].color !== color) {
				addMove(x + 1, y - 1);
			}
		} else {
			addMove(x + 1, y - 1);
		}
		if (pieces[convertIndexToPosition([x + 1, y])]) {
			if (pieces[convertIndexToPosition([x + 1, y])].color !== color) {
				addMove(x + 1, y);
			}
		} else {
			addMove(x + 1, y);
		}

		return moves;
	};

	const iconUrl = color === 'white' ? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" : 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg';


	return (
		<div
			style={{width: '100%', height: '100%', backgroundImage: `url(${iconUrl})`, cursor: 'grab'}}
			onDragStart={(e) => onDragStart(e, King, position, color, getAvailableMoves())}
			onDragEnd={(e) => onDragEnd(e)}
			draggable={true}

		>
		</div>
	);
};

export default King;