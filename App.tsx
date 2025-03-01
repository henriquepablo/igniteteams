import Groups from '@screens/Groups';
import type React from 'react';
import { SafeAreaView } from 'react-native';
import theme from './src/theme';
import { ThemeProvider } from 'styled-components';

function App(): React.JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<SafeAreaView style={{backgroundColor: theme.colors.gray_600}}/>
			<Groups />
		</ThemeProvider>
	);
}

export default App;
