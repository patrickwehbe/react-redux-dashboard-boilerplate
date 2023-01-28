import { SET_AUTHENTICATED } from "../types/user.type";
import { SET_ERRORS, LOADING_UI, CLEAR_ERRORS } from "../types/ui.type";
import axios from "../../../axios";

export const loginUser = (email: string, password: string) => (dispatch: any) => {
	dispatch({ type: LOADING_UI });
	axios
		.post("/user/login", {
			email,
			password,
		})
		.then((res) => {
			const token = `Bearer ${res.data.token}`;
			localStorage.setItem("token", token);
			axios.defaults.headers.common["Authorization"] = token;
			dispatch({ type: CLEAR_ERRORS });
			dispatch({ type: SET_AUTHENTICATED });
		})
		.catch((err) => {
			dispatch({
				type: SET_ERRORS,
				payload: err.response,
			});
		});
};

export const registerUser = (email: string, password: string) => (dispatch: any) => {
	dispatch({ type: LOADING_UI });
	axios
		.post("/user/register", {
			email,
			password,
		})
		.then((res) => {
			const token = `Bearer ${res.data.token}`;
			localStorage.setItem("token", token);
			axios.defaults.headers.common["Authorization"] = token;
			dispatch({ type: CLEAR_ERRORS });
			dispatch({ type: SET_AUTHENTICATED });
		})
		.catch((err) => {
			dispatch({
				type: SET_ERRORS,
				payload: err.response,
			});
		});
};
