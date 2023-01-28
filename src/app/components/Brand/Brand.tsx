import { Box, styled } from "@mui/material";
import useSettings from "../../hooks/useSettings";
import { Span } from "../Typography";
import React from "react";

const BrandRoot = styled(Box)(() => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: "20px 18px 20px 29px",
}));

interface StyledSpanProps {
	mode: string;
}

const StyledSpan = styled(Span)(({ mode }: StyledSpanProps) => ({
	fontSize: 18,
	marginLeft: ".5rem",
	display: mode === "compact" ? "none" : "block",
}));

const Brand = ({ children }) => {
	const { settings } = useSettings();
	const leftSidebar = settings.layout1Settings.leftSidebar;
	const { mode } = leftSidebar;

	return (
		<BrandRoot>
			<Box display="flex" alignItems="center">
				<img src="./assets/logo" alt="" style={{ height: "40px" }} />
				<StyledSpan
					mode={mode}
					className="sidenavHoverShow"
					ellipsis={undefined}
					textTransform={undefined}>
					Organization Name
				</StyledSpan>
			</Box>

			<Box
				className="sidenavHoverShow"
				sx={{ display: mode === "compact" ? "none" : "block" }}>
				{children || null}
			</Box>
		</BrandRoot>
	);
};

export default Brand;
