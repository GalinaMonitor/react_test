import React, {useState} from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);

	function increment() {
		setCount(count + 1)
	}

	function decrement() {
		setCount(count - 1)
	}

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={increment}>Like</button>
			<button onClick={decrement}>Disike</button>
		</div>
	)
};

export default Counter;
