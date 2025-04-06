import Groups from "@screens/Groups";
import theme from "@theme/index";
import { ThemeProvider }  from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"
import Loading from "@components/Loading";
import { StatusBar } from "react-native";

export default function App() {

    const [ fonntsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold });

    return (
        <ThemeProvider theme={theme}>
            <StatusBar 
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />
            {  
                fonntsLoaded ? <Groups /> : <Loading />
            }

        </ThemeProvider>
    );
}
