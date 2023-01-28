import Loading from "../Loading/Loading";
import { Suspense } from "react";
import React from "react";

interface MatxSuspenseProps {
	children: React.ReactNode;
}

const MatxSuspense: React.FC<MatxSuspenseProps> = ({ children }) => {
	return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default MatxSuspense;
