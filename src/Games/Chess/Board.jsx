import React, {useState} from 'react';
import {getSquaresData, piecesData} from "./service";
import BoardSquare from "./BoardSquare";
import Piece from "./pieces/Piece";

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

	function dragStartHandler(e, piece, position, availableMoves) {
		setCurrentPiece({
			piece: piece,
			position: position,
		});
		setAvailableMoves(availableMoves);
		availableMoves.forEach(move => {
			squares[move].color = 'green';
		});
		setSquares({...squares});
		return undefined;
	}

	return (

		<div style={{
			display: 'flex',
			width: '400px',
			height: '400px',
			flexWrap: 'wrap'
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
						>
							{piece !== null ?
								<Piece
									piece={piece}
									position={position}
									onDragStart={dragStartHandler}
								/>
								: null}
						</BoardSquare>
					</>
				)
			})}
		</div>
	);
};

export default Board;