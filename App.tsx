import type React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Groups from './src/screens/Groups';

function App(): React.JSX.Element {
	return (
		<View>
			<SafeAreaView />
			<Groups />
		</View>
	);
}

export default App;
