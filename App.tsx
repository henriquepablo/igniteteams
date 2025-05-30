import theme from "@theme/index";
import { ThemeProvider }  from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"
import Loading from "@components/Loading";
import { SafeAreaView, StatusBar } from "react-native";
import Routes from "@routes/index";

export default function App() {

    const [ fonntsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold });

    return (
        <ThemeProvider theme={theme}>
            <StatusBar 
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />
            <SafeAreaView style={{ backgroundColor: theme.COLORS.GRAY_600 }}/>
            {  
                fonntsLoaded ? <Routes /> : <Loading />
            }

        </ThemeProvider>
    );
}
