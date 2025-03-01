import Groups from '@screens/Groups';
import type React from 'react';
import { SafeAreaView } from 'react-native';
import theme from './src/theme';
import { ThemeProvider } from 'styled-components';

function App(): React.JSX.Element {
	return (
		<ThemeProvider theme={{theme}}>
			<SafeAreaView />
			<Groups />
		</ThemeProvider>
	);
}

export default App;
