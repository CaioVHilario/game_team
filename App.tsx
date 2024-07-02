import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';

import Theme from '@theme/index';
import { Loading } from 'src/Components/Loading';
import { Routes } from 'src/routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={Theme}>
      <StatusBar
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
