import React from 'react';
import {convertIndexToPosition, convertPositionToIndex} from "../service";

const King = ({position, onDragStart}) => {
	const getAvailableMoves = () => {
		const moves = [];
		const [x, y] = convertPositionToIndex(position);

		const addMove = (x, y) => {
			if (x >= 0 && x < 8 && y >= 0 && y < 8) {
				moves.push(convertIndexToPosition([x, y]));
			}
		};
		addMove(x - 1, y - 1);
		addMove(x - 1, y);
		addMove(x - 1, y + 1);
		addMove(x, y - 1);
		addMove(x, y + 1);
		addMove(x + 1, y - 1);
		addMove(x + 1, y);
		addMove(x + 1, y + 1);
		return moves;
	};

	const iconUrl = " https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg";


	return (
		<div
			style={{width: '100%', height: '100%', backgroundImage: `url(${iconUrl})`}}
			onDragStart={(e) => onDragStart(e, King, position, getAvailableMoves())}
			draggable={true}
		>
		</div>
	);
};

export default King;