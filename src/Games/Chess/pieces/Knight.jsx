import React, {useContext} from 'react';
import {convertIndexToPosition, convertPositionToIndex} from "../service";
import {PiecesContext} from "../context";

const Knight = ({position, onDragStart, color}) => {
	const pieces = useContext(PiecesContext);

	const getAvailableMoves = () => {
		const moves = [];
		const [x, y] = convertPositionToIndex(position);

		const addMove = (x, y) => {
			if (x >= 0 && x < 8 && y >= 0 && y < 8) {
				moves.push(convertIndexToPosition([x, y]));
			}
		};
		if (!pieces[convertIndexToPosition([x + 2, y + 1])] || pieces[convertIndexToPosition([x + 2, y + 1])].color !== color) {
			addMove(x + 2, y + 1);
		}
		if (!pieces[convertIndexToPosition([x + 2, y - 1])] || pieces[convertIndexToPosition([x + 2, y - 1])].color !== color) {
			addMove(x + 2, y - 1);
		}
		if (!pieces[convertIndexToPosition([x + 1, y + 2])] || pieces[convertIndexToPosition([x + 1, y + 2])].color !== color) {
			addMove(x + 1, y + 2);
		}
		if (!pieces[convertIndexToPosition([x + 1, y - 2])] || pieces[convertIndexToPosition([x + 1, y - 2])].color !== color) {
			addMove(x + 1, y - 2);
		}
		if (!pieces[convertIndexToPosition([x - 2, y + 1])] || pieces[convertIndexToPosition([x - 2, y + 1])].color !== color) {
			addMove(x - 2, y + 1);
		}
		if (!pieces[convertIndexToPosition([x - 2, y - 1])] || pieces[convertIndexToPosition([x - 2, y - 1])].color !== color) {
			addMove(x - 2, y - 1);
		}
		if (!pieces[convertIndexToPosition([x - 1, y + 2])] || pieces[convertIndexToPosition([x - 1, y + 2])].color !== color) {
			addMove(x - 1, y + 2);
		}
		if (!pieces[convertIndexToPosition([x - 1, y - 2])] || pieces[convertIndexToPosition([x - 1, y - 2])].color !== color) {
			addMove(x - 1, y - 2);
		}

		return moves;
	};

	const iconUrl = color === 'white' ? "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" : 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg';


	return (
		<div
			style={{width: '100%', height: '100%', backgroundImage: `url(${iconUrl})`, cursor: 'grab'}}
			onDragStart={(e) => onDragStart(e, Knight, position, color, getAvailableMoves())}
			draggable={true}

		>
		</div>
	);
};

export default Knight;