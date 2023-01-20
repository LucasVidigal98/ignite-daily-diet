import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { ConfirmScreen } from '@screens/CofirmScreen';
import { DietForm } from '@screens/DietForm';
import { Home } from '@screens/Home';
import { MealScreen } from '@screens/MealScreen';
import { Statistics } from '@screens/Statistics';
import theme from '@theme/index';
import { StatusBar, View } from 'react-native';
import { ThemeProvider } from 'styled-components';

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <MealScreen /> : <View />}
    </ThemeProvider>
  );
}
