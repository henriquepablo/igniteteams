import Groups from '@screens/Groups';
import type React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

function App(): React.JSX.Element {
	return (
		<View style={{flex: 1}}>
			<SafeAreaView />
			<Groups />
		</View>
	);
}

export default App;
