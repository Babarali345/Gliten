import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../screens/Auth/SignUp';
import {COLORS, SCREENS} from '../constants/them';
import BackArrow from '../compnanat/BackArrow';
import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: '',
          headerStyle: {
            backgroundColor:COLORS.white,
          },
          headerShadowVisible: false,
          headerLeft: () => <BackArrow />,
        }}>
        <Stack.Screen name={SCREENS.BottomNavigation} component={BottomNavigation} 
        options={{headerShown:false}}
        />
        <Stack.Screen name={SCREENS.SignUp} component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;