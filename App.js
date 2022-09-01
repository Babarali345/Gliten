import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {
  responsiveFontSize as rf,
  heightPercentageToDP as hp,
} from './src/common/responsiveFunction';
import {COLORS} from './src/constants/them';
import MainNavigation from './src/navigation/MainNavigation';

const App = () => {
  return (
    // <SafeAreaView style={styles.container}>
      <MainNavigation />
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  txt: {
    fontSize: rf(2),
    color: COLORS.black,
    fontWeight: 'bold',
    marginTop: hp('1%'),
  },
});

export default App;
