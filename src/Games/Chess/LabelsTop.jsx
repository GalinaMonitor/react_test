import React from 'react';

const LabelsTop = () => {
	return (
		<div
			style={{
				marginLeft: '35px',
				width: '450px',
				height: '35px',
				display: 'flex',
				flexWrap: 'nowrap',
				justifyContent: 'space-around',
			}}
		>
			{['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((letter, index) => {
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

export default LabelsTop;