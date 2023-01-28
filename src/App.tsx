import React from "react";
import { useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./app/redux/store";
import { AllPages } from "./app/routes/routes";
import "./App.css";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./app/components/Loading/Loading";
import { AuthProvider } from "./app/contexts/JWTAuthContext";
import { SettingsProvider } from "./app/contexts/SettingsContext";
import MatxTheme from "./app/components/MatxTheme/MatxTheme";

function App() {
	const all_pages = useRoutes(AllPages());
	return (
		<Provider store={store}>
			<PersistGate loading={<Loading />} persistor={persistor}>
				<SettingsProvider>
					<MatxTheme>
						<AuthProvider>{all_pages}</AuthProvider>
					</MatxTheme>
				</SettingsProvider>
			</PersistGate>
		</Provider>
	);
}

export default App;
