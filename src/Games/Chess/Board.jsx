import React, {useEffect, useState} from 'react';
import {getSquaresData, piecesData} from "./service";
import BoardSquare from "./BoardSquare";
import Piece from "./pieces/Piece";
import {PiecesContext} from "./context";

const Board = () => {
	const [currentPiece, setCurrentPiece] = useState(null);
	const [pieces, setPieces] = useState(piecesData);
	const [squares, setSquares] = useState(getSquaresData());
	const [availableMoves, setAvailableMoves] = useState([]);

	// Действия после перемещения фигуры
	useEffect(() => {
		setAvailableMoves([]);
		setCurrentPiece(null);
		setSquares(getSquaresData());
	}, [pieces]);


	const movePiece = (position) => {
		if (availableMoves.includes(position)) {
			delete pieces[currentPiece.position];
			setCurrentPiece({...currentPiece, position: position});
			setPieces({...pieces, [position]: currentPiece});
		}
	}

	function dragStartHandler(e, piece, position, color, availableMoves) {
		setCurrentPiece({
			piece: piece,
			position: position,
			color: color
		});
		setAvailableMoves(availableMoves);
		availableMoves.forEach(move => {
			squares[move].highlightColor = 'green';
		});
		setSquares({...squares});
		return undefined;
	}

	function dragEndHandler(e) {
		e.preventDefault()
		e.stopPropagation()
		setAvailableMoves([]);
		setCurrentPiece(null);
		setSquares(getSquaresData());
		return undefined;
	}

	function setDragOverColor(position, color) {
		if (squares[position].dragOverColor !== color) {
			squares[position].dragOverColor = color;
			setSquares({...squares});
		}
	}

	function setHighlightColor(position, color) {
		if (squares[position].highlightColor !== color) {
			squares[position].highlightColor = color;
			setSquares({...squares});
		}
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
								color={
									square.dragOverColor ? square.dragOverColor :
										square.highlightColor ? square.highlightColor :
											square.color}
								position={square.position
								}
								movePiece={movePiece}
								setHighlightColor={setHighlightColor}
								setDragOverColor={setDragOverColor}
							>
								{piece !== null ?
									<Piece
										key={i}
										piece={piece}
										position={position}
										color={pieces[position].color}
										onDragStart={dragStartHandler}
										onDragEnd={dragEndHandler}
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
