import React from 'react';

const LabelsLeft = () => {
	return (
		<div
			style={{
				width: '35px',
				height: '400px',
				display: 'flex',
				flexDirection: 'column',
				flexWrap: 'nowrap',
				justifyContent: 'space-around',
			}}
		>
			{['8', '7', '6', '5', '4', '3', '2', '1'].map((letter, index) => {
				return (
					<div
						key={index}
						style={{
							width: '30px',
							height: '30px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							fontSize: '15px',
							fontWeight: 'bold',
							color: '#fff',
							backgroundColor: 'pink',
							borderRadius: '50%',
						}}
					>
						{letter}
					</div>
				);
			})}
		</div>
	);
};

export default LabelsLeft;