import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import {
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from '../common/responsiveFunction';
import {COLORS, FONTFAMILY, SCREENS} from '../constants/them';
import Commercial from '../screens/FilterProperty/Commercial';
import Residential from '../screens/FilterProperty/Residential';

const Tab = createMaterialTopTabNavigator();

export default function FilterTabs() {
  function MyTabBar({state, descriptors, navigation, position}) {
    return (
      <View style={{flexDirection: 'row'}}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const inputRange = state.routes.map((_, i) => i);
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map(i => (i === index ? 1 : 0)),
          });

          return (
            <TouchableOpacity
            key={index.toString()}
              accessibilityRole='button'
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                backgroundColor: COLORS.white,
                paddingHorizontal: wp('3%'),
              }}>
              <Animated.Text
                style={{
                  color: COLORS.black,
                  fontSize: rf(1.6),
                  fontFamily: FONTFAMILY.Bold, 
                }}>
                {label}
              </Animated.Text>
              <View
                style={{
                  height: hp('0.2%'),
                  backgroundColor: isFocused ? COLORS.lightBlue : COLORS.white,
                  width: wp('30%'),
                  marginTop:hp('1%')
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}
    >
      <Tab.Screen name={SCREENS.Residential} component={Residential} />
      <Tab.Screen name={SCREENS.Commercial} component={Commercial} />
    </Tab.Navigator>
  );
}
