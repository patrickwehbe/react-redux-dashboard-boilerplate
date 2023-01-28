import { Card, Grid, Button, Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
// import useAuth from 'app/hooks/useAuth'
import { useNavigate } from "react-router-dom";
import { Box, styled } from "@mui/system";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

interface Props {
	onSubmit: (username: string, password: string) => void;
}

const FlexBox = styled(Box)(() => ({
	display: "flex",
	alignItems: "center",
}));

const JustifyBox = styled(FlexBox)(() => ({
	justifyContent: "center",
}));

const ContentBox = styled(Box)(() => ({
	height: "100%",
	padding: "32px",
	position: "relative",
	background: "rgba(0, 0, 0, 0.01)",
}));

const IMG = styled("img")(() => ({
	width: "100%",
}));

const JWTRoot = styled(JustifyBox)(() => ({
	background: "#1A2038",
	minHeight: "100vh !important",
	"& .card": {
		maxWidth: 800,
		borderRadius: 12,
		margin: "1rem",
	},
}));

const JwtLogin: React.FC<Props> = ({ onSubmit }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSubmit(username, password);
	};
	const navigate = useNavigate();
	// const { login } = useAuth();

	const [userInfo] = useState({
		email: "user@mail.com",
		password: "dummyPass",
		agreement: false,
	});

	// const [loading] = useState(false);

	// const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	let temp = { ...userInfo };
	// 	temp[event.target.name] = event.target.value as any;
	// 	setUserInfo(temp);
	// };

	// const handleFormSubmit = (e) => {
	// 	e.preventDefault();

	// 	try {
	// 		// dispatch(loginUser(userInfo.email, userInfo.password))
	// 		// login(userInfo.email, userInfo.password);
	// 		navigate("/");
	// 	} catch (e) {}
	// };

	return (
		<JWTRoot>
			<Card className="card">
				<Grid container>
					<Grid item lg={5} md={5} sm={5} xs={12}>
						<JustifyBox p={4} height="100%">
							<IMG src="/dreamer.svg" alt="" />
						</JustifyBox>
					</Grid>

					<Grid item lg={7} md={7} sm={7} xs={12}>
						<ContentBox>
							<ValidatorForm onSubmit={handleSubmit}>
								<TextValidator
									label="Username"
									onChange={(event) => setUsername(event.target.value)}
									name="username"
									value={userInfo.email}
									validators={["required"]}
									errorMessages={["this field is required"]}
								/>
								<TextValidator
									label="Password"
									onChange={(event) => setPassword(event.target.value)}
									name="password"
									type="password"
									value={userInfo.password}
									validators={["required"]}
									errorMessages={["this field is required"]}
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={rememberMe}
											onChange={(event) =>
												setRememberMe(event.target.checked)
											}
											name="rememberMe"
											color="primary"
										/>
									}
									label="Remember me"
								/>
								<Button
									type="submit"
									variant="contained"
									color="primary"
									onClick={(e) => navigate("/")}>
									Login
								</Button>
							</ValidatorForm>
						</ContentBox>
					</Grid>
				</Grid>
			</Card>
		</JWTRoot>
	);
};

export default JwtLogin;
