import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {screenNames} from '../constants';
import {Home, Login, Detail} from '../screens';
const Stack = createStackNavigator();
const screenOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  headerShown: false,
};
const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={screenNames.Detail}
      screenOptions={screenOptions}>
      <Stack.Screen name={screenNames.Login} component={Login} />
      <Stack.Screen name={screenNames.Home} component={Home} />
      <Stack.Screen name={screenNames.Detail} component={Detail} />
    </Stack.Navigator>
  );
};
export default AppNavigation;
