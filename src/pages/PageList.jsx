import React from 'react';
import {privateRoutes} from "../router";
import {Link} from "react-router-dom";


const PageList = () => {
	return (
		<div>
			{privateRoutes.map((route, index) => {
				return (
					<div key={index}>
						<Link to={route.path}>{route.name}</Link>
					</div>
				)
			})}
		</div>
	);
};

export default PageList;