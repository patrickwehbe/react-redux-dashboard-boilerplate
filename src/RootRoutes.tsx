import { Redirect } from "@reach/router";
import React from "react";
import { Navigate } from "react-router-dom";
import dashboardRoutes from "./app/views/dashboard/dashboard.route";

const redirectRoute = [
	{
		path: "/",
		exact: true,
		component: () => <Redirect to="/dashboard/default" />,
	},
];

const errorRoute = [
	{
		component: () => <Navigate to="/session/404" />,
	},
];

const routes = [...dashboardRoutes, ...redirectRoute, ...errorRoute];

export default routes;
