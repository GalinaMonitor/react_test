import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Login from "../pages/Login";
import PageList from "../pages/PageList";

export const privateRoutes = [
	{path: '/about', element: <About/>, name: 'About'},
	{path: '/posts', element: <Posts/>, name: 'Posts'},
	{path: '/posts/:id', element: <PostIdPage/>},
	{path: '/page-list', element: <PageList/>, name: 'PageList'},
	{path: '*', element: <Posts/>},
]

export const publicRoutes = [
	{path: '/login', element: <Login/>},
	{path: '*', element: <Login/>},

]