import React, { createContext, useState } from "react";
import { merge } from "lodash";
import { MatxLayoutSettings } from "../components/MatxLayout/settings";

interface SettingsContextProps {
	settings: typeof MatxLayoutSettings;
	updateSettings: (update: Partial<typeof MatxLayoutSettings>) => void;
}

const SettingsContext = createContext<SettingsContextProps>({
	settings: MatxLayoutSettings,
	updateSettings: () => {},
});

interface SettingsProviderProps {
	initialSettings?: Partial<typeof MatxLayoutSettings>;
	children: React.ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({
	initialSettings,
	children,
}) => {
	const [currentSettings, setCurrentSettings] = useState<typeof MatxLayoutSettings>(
		merge({}, MatxLayoutSettings, initialSettings)
	);

	const handleUpdateSettings = (update: Partial<typeof MatxLayoutSettings>) => {
		const marged = merge({}, currentSettings, update);
		setCurrentSettings(marged);
	};

	return (
		<SettingsContext.Provider
			value={{
				settings: currentSettings,
				updateSettings: handleUpdateSettings,
			}}>
			{children}
		</SettingsContext.Provider>
	);
};

export default SettingsContext;
