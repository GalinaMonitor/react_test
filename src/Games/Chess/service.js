import King from "./pieces/King";
import Queen from "./pieces/Queen";
import Bishop from "./pieces/Bishop";
import Knight from "./pieces/Knight";
import Rook from "./pieces/Rook";
import Pawn from "./pieces/Pawn";

export const getSquaresData = () => {
	const squaresData = {}
	for (let y = 8; y > 0; y--) {
		for (let x = 0; x < 8; x++) {
			squaresData[String.fromCharCode(65 + x) + String(y)] = {
				position: String.fromCharCode(65 + x) + String(y),
				color: (x + y) % 2 === 0 ? 'white' : 'black',
				highlightColor: null,
				dragOverColor: null,
				piece: null,

			}
		}
	}
	return squaresData;
};

export const piecesData = {
	'D8': {
		piece: King,
		position: 'A1',
		color: 'black'
	},
	'E1': {
		piece: King,
		position: 'B1',
		color: 'white'
	},
	'E8': {
		piece: Queen,
		position: 'A1',
		color: 'black'
	},
	'D1': {
		piece: Queen,
		position: 'B1',
		color: 'white'
	},
	'F8': {
		piece: Bishop,
		position: 'A1',
		color: 'black'
	},
	'C1': {
		piece: Bishop,
		position: 'B1',
		color: 'white'
	},
	'C8': {
		piece: Bishop,
		position: 'A1',
		color: 'black'
	},
	'F1': {
		piece: Bishop,
		position: 'B1',
		color: 'white'
	},
	'G8': {
		piece: Knight,
		position: 'A1',
		color: 'black'
	},
	'B1': {
		piece: Knight,
		position: 'B1',
		color: 'white'
	},
	'B8': {
		piece: Knight,
		position: 'A1',
		color: 'black'
	},
	'G1': {
		piece: Knight,
		position: 'B1',
		color: 'white'
	},
	'H8': {
		piece: Rook,
		position: 'A1',
		color: 'black'
	},
	'A1': {
		piece: Rook,
		position: 'B1',
		color: 'white'
	},
	'A8': {
		piece: Rook,
		position: 'A1',
		color: 'black'
	},
	'H1': {
		piece: Rook,
		position: 'B1',
		color: 'white'
	},


	'A2': {
		piece: Pawn,
		position: 'B1',
		color: 'white'
	},
	'B2': {
		piece: Pawn,
		position: 'B1',
		color: 'white'
	},
	'C2': {
		piece: Pawn,
		position: 'B1',
		color: 'white'
	},
	'D2': {
		piece: Pawn,
		position: 'B1',
		color: 'white'
	},
	'E2': {
		piece: Pawn,
		position: 'B1',
		color: 'white'
	},
	'F2': {
		piece: Pawn,
		position: 'B1',
		color: 'white'
	},
	'G2': {
		piece: Pawn,
		position: 'B1',
		color: 'white'
	},
	'H2': {
		piece: Pawn,
		position: 'B1',
		color: 'white'
	},


	'A7': {
		piece: Pawn,
		position: 'B1',
		color: 'black'
	},
	'B7': {
		piece: Pawn,
		position: 'B1',
		color: 'black'
	},
	'C7': {
		piece: Pawn,
		position: 'B1',
		color: 'black'
	},
	'D7': {
		piece: Pawn,
		position: 'B1',
		color: 'black'
	},
	'E7': {
		piece: Pawn,
		position: 'B1',
		color: 'black'
	},
	'F7': {
		piece: Pawn,
		position: 'B1',
		color: 'black'
	},
	'G7': {
		piece: Pawn,
		position: 'B1',
		color: 'black'
	},
	'H7': {
		piece: Pawn,
		position: 'B1',
		color: 'black'
	},

}

export const convertPositionToIndex = (position) => {
	const x = position.charCodeAt(0) - 65;
	const y = position.charCodeAt(1) - 49;
	return [x, y];
}

export const convertIndexToPosition = (index) => {
	const x = index[0] + 65;
	const y = index[1] + 1;
	return String.fromCharCode(x) + String(y);
}

export const getColorFromPosition = (position) => {
	const x = position.charCodeAt(0) - 65;
	const y = position.charCodeAt(1) - 49;
	return (x + y) % 2 === 0 ? 'black' : 'white';
}