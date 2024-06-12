import { ThemeProvider } from 'styled-components/native';
import { Groups } from './src/Screens/Groups';
import Theme from '@theme/index';
import { StatusBar } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import { Loading } from 'src/Components/Loading';
import { NewGroup } from 'src/Screens/NewGroup';
import { Players } from 'src/Screens/Players';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={Theme}>
      <StatusBar
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent
      />
      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}
