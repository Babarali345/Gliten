import React from 'react';
import {StyleSheet,SafeAreaView} from 'react-native';
import Toast, {BaseToast} from 'react-native-toast-message';

import {
  responsiveFontSize as rf,
  heightPercentageToDP as hp,
} from './src/common/responsiveFunction';
import {COLORS, FONTFAMILY} from './src/constants/them';
import MainNavigation from './src/navigation/MainNavigation';

const App = () => {
  const toastConfig = {
    success: props => (
      <BaseToast
        {...props}
        text1Style={{
          color: COLORS.white,
          fontSize: rf(2),
          fontFamily: FONTFAMILY.Bold,
        }}
        text2Style={{
          color: COLORS.white,
          fontSize: rf(1.5),
          fontFamily: FONTFAMILY.SemiBold,
        }}
        style={{backgroundColor: COLORS.trueGreen}}
      />
    ),
  };
  return (
    <SafeAreaView style={styles.container}>
      <MainNavigation />
      <Toast config={toastConfig} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  txt: {
    fontSize: rf(2),
    color: COLORS.black,
    fontWeight: 'bold',
    marginTop: hp('1%'),
  },
});

export default App;
