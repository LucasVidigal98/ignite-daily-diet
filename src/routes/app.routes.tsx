import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ConfirmScreen } from '@screens/CofirmScreen';
import { DietForm } from '@screens/DietForm';
import { Home } from '@screens/Home';
import { MealScreen } from '@screens/MealScreen';
import { Statistics } from '@screens/Statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='home' component={Home} />
      <Screen name='form' component={DietForm} />
      <Screen name='meals' component={MealScreen} />
      <Screen name='statistics' component={Statistics} />
      <Screen name='confirm' component={ConfirmScreen} />
    </Navigator>
  );
}