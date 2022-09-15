import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../screens/Auth/SignUp';
import {COLORS, SCREENS} from '../constants/them';
import BackArrow from '../compnanat/BackArrow';
import BottomNavigation from './BottomNavigation';
import MyDrawer from './Drawer';
import FilterProperty from '../screens/FilterProperty/Residential';
import FilterTabs from './TopTabFilter';
import FilterSearchList from '../screens/FilterProperty/FilterSearchList';
import AddProperty1 from '../screens/AddProperty/AddPropertyScreen1';
import AddPropertyScreen2 from '../screens/AddProperty/AddPropertyScreen2';
import AddPropertyScreen3 from '../screens/AddProperty/AddPropertyScreen3';
import AddPropertyScreen4 from '../screens/AddProperty/AddPropertyScreen4';
import AddPropertyScreen5 from '../screens/AddProperty/AddPropertyScreen5';
import SignIn from '../screens/Auth/SighnIn';
import SignUpMore from '../screens/Auth/SignUpMore';
import MoreUserProfile from '../screens/Auth/MoreUserProfile';
import PropertyDetailScreen from '../screens/PropertyDetail/PropertyOverview';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <NavigationContainer
  
    >
      <Stack.Navigator
        screenOptions={{
          title: '',
          headerStyle: {
            backgroundColor:COLORS.white,
          },
          headerShadowVisible: false,
          headerLeft: () => <BackArrow />,
        }}
       
        >
        <Stack.Screen name={SCREENS.MyDrawer} component={MyDrawer} 
        options={{headerShown:false}}
    
        />
          <Stack.Screen name={SCREENS.SignUp} component={SignUp} />
          <Stack.Screen name={SCREENS.SignIn} component={SignIn} />
          <Stack.Screen name={SCREENS.SignUpMore} component={SignUpMore} />
          <Stack.Screen name={SCREENS.MoreUserProfile} component={MoreUserProfile} />
          <Stack.Screen name={SCREENS.FilterTabs} component={FilterTabs} />
          <Stack.Screen name={SCREENS.FilterSearchList} component={FilterSearchList}
         options={{
          
         }}
          />
          <Stack.Screen name={SCREENS.AddProperty1} component={AddProperty1} />
          <Stack.Screen name={SCREENS.AddProperty2} component={AddPropertyScreen2} />
          <Stack.Screen name={SCREENS.AddPropertyScreen3} component={AddPropertyScreen3} />
          <Stack.Screen name={SCREENS.AddPropertyScreen4} component={AddPropertyScreen4} />
          <Stack.Screen name={SCREENS.AddPropertyScreen5} component={AddPropertyScreen5} />
          <Stack.Screen name={SCREENS.PropertyDetailScreen} component={PropertyDetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
