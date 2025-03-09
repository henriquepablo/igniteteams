import Loading from '@components/Loading';
import Groups from '@screens/Groups';
import NewGroup from '@screens/NewGroup';
import type React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';

function App(): React.JSX.Element {
	return (
		<ThemeProvider theme={theme}>
			<SafeAreaView style={{ backgroundColor: theme.colors.gray_600 }} />
			<NewGroup />
		</ThemeProvider>
	);
}

export default App;
