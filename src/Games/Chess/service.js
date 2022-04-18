import King from "./pieces/King";

export const getSquaresData = () => {
	const squaresData = {}
	for (let y = 8; y > 0; y--) {
		for (let x = 0; x < 8; x++) {
			squaresData[String.fromCharCode(65 + x) + String(y)] = {
				position: String.fromCharCode(65 + x) + String(y),
				color: (x + y) % 2 === 0 ? 'black' : 'white',
				piece: null

			}
		}
	}
	return squaresData;
};

export const piecesData = {
	'A1': {
		piece: King,
		position: 'A1',
	},
	'B1': {
		piece: King,
		position: 'B1',
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