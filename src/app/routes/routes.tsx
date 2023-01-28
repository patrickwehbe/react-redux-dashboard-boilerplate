import React from "react";
import { Navigate } from "react-router-dom";
import NotFound from "../views/sessions/NotFound";
import sessionRoutes from "../views/sessions/SessionRoutes";
import dashboardRoutes from "../views/dashboard/dashboard.route";
// import AuthGuard from "../auth/AuthGuard";
import MatxLayout from "../components/MatxLayout/MatxLayout";
import userRoutes from "../views/users/user.route";

export const AllPages = () => {
	const all_routes = [
		{
			element: (
				// <AuthGuard>
				<MatxLayout />
				// </AuthGuard>
			),
			children: [...dashboardRoutes, ...userRoutes],
		},
		...sessionRoutes,
		{
			path: "/",
			element: <Navigate to="dashboard/default" />,
		},
		{
			path: "*",
			element: <NotFound />,
		},
	];

	return all_routes;
};
