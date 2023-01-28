import React, { lazy } from "react";
import Loadable from "../../components/Loadable/Loadable";

const User = Loadable(lazy(() => import("./User")));

const userRoutes = [
	{
		path: "/user",
		element: <User />,
	},
];

export default userRoutes;
