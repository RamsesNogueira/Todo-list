import { StatusBar } from 'react-native';
import {
  useFonts, 
  Inter_400Regular, 
  Inter_700Bold
} from "@expo-google-fonts/inter"
import { HomeScreen } from './scr/screens';
import { Loading } from './scr/components/loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_700Bold,
  })
  return (
    <>
      {fontsLoaded ? <HomeScreen /> : <Loading />}
      <StatusBar 
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
    </>
  );
}