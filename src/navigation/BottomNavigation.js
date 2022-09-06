import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  heightPercentageToDP as hp,
  responsiveFontSize,
  responsiveFontSize as rf,
} from '../common/responsiveFunction';
import {COLORS, SCREENS} from '../constants/them';
import Profile from '../screens/BottomTab/Profile';
import ShortListed from '../screens/BottomTab/ShortListed';
import Activity from '../screens/BottomTab/Activity';
import Home from '../screens/BottomTab/Home';
import {Text} from 'react-native';
import { ActivitySvg, HomeSvg, ProfileSvg, ShortListedSvg } from '../compnanat/svg';

const Tab = createBottomTabNavigator();
const CustomText = ({isFocused, label}) => {
  return (
    <Text
      style={[
        {
          fontSize: rf(1.3),
          color: isFocused ? COLORS.primary : COLORS.tabBarLabel,
          marginVertical: hp('0.5%'),
        },
      ]}>
      {label}
    </Text>
  );
};
export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarStyle: {height: hp('8%')}}}>
      <Tab.Screen
        name={SCREENS.Home}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => <HomeSvg focused={focused} />,
          tabBarLabel: ({focused, color}) => (
            <CustomText isFocused={focused} label={'Home'} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.Activity}
        component={Activity}
        options={{
          tabBarIcon: ({focused}) => <ActivitySvg focused={focused} />,
          tabBarLabel: ({focused, color}) => (
            <CustomText isFocused={focused} label={'Activity'} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.ShortListed}
        component={ShortListed}
        options={{
          tabBarIcon: ({focused}) => <ShortListedSvg focused={focused} />,
          tabBarLabel: ({focused, color}) => (
            <CustomText isFocused={focused} label={'Shortlisted'} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.Profile}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => <ProfileSvg focused={focused} />,
          tabBarLabel: ({focused, color}) => (
            <CustomText isFocused={focused} label={'Profile'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
