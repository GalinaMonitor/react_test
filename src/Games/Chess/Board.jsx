import React, {useContext, useState, createContext} from 'react';
import {getSquaresData, piecesData} from "./service";
import BoardSquare from "./BoardSquare";
import Piece from "./pieces/Piece";
import {PiecesContext} from "./context";

const Board = () => {
	const [currentPiece, setCurrentPiece] = useState(null);
	const [pieces, setPieces] = useState(piecesData);
	const [squares, setSquares] = useState(getSquaresData());
	const [availableMoves, setAvailableMoves] = useState([]);

	const movePiece = (position) => {
		if (availableMoves.includes(position)) {
			delete pieces[currentPiece.position];
			setCurrentPiece({...currentPiece, position: position});
			setPieces({...pieces, [position]: currentPiece});
		}
		setAvailableMoves([]);
	}

	function dragStartHandler(e, piece, position, color, availableMoves) {
		setCurrentPiece({
			piece: piece,
			position: position,
			color: color
		});
		setAvailableMoves(availableMoves);
		availableMoves.forEach(move => {
			squares[move].color = 'green';
		});
		setSquares({...squares});
		return undefined;
	}

	function setColor(position, color) {
		squares[position].color = color;
		setSquares({...squares});
	}

	return (
		<PiecesContext.Provider value={pieces}>

		<div style={{
			display: 'flex',
			width: '410px',
			height: '410px',
			flexWrap: 'wrap',
			border: '5px solid pink',
		}}>
			{Object.entries(squares).map(([position, square], i) => {
				let piece = position in pieces ? pieces[position].piece : null;
				return (
					<>
						<BoardSquare
							key={i}
							color={square.color}
							position={square.position}
							movePiece={movePiece}
							cleanBoard={() => {
								setCurrentPiece(null);
								setSquares(getSquaresData());
							}}
							setColor={setColor}
						>
							{piece !== null ?
								<Piece
									piece={piece}
									position={position}
									color={pieces[position].color}
									onDragStart={dragStartHandler}
								/>
								: null}
						</BoardSquare>
					</>
				)
			})}
		</div>
		</PiecesContext.Provider>
	);
};

export default Board;
