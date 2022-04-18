import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Login from "../pages/Login";
import PageList from "../pages/PageList";
import Games from "../pages/Games";

export const privateRoutes = [
	{path: '/about', element: <About/>, name: 'About'},
	{path: '/posts', element: <Posts/>, name: 'Posts'},
	{path: '/games/', element: <Games/>, name: 'Games'},
	{path: '/posts/:id', element: <PostIdPage/>},
	{path: '/page-list', element: <PageList/>},
	{path: '*', element: <Posts/>},
]

export const publicRoutes = [
	{path: '/login', element: <Login/>},
	{path: '*', element: <Login/>},

]