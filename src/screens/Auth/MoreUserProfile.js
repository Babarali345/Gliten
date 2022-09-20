import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY} from '../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';
import ProfileBox from '../../compnanat/ProfileBox';
export default function MoreUserProfile({route}) {
  const renderItem = () => {
    return <ProfileBox 
    from={route.params.from}
    />;
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.txt]}>{route.params.from} Profiles </Text>
      <Text style={[styles.txt1]}>{route.params.from} in mumbai</Text>
      <FlatList
        data={[1, 2, 3]}
        renderItem={renderItem}
        contentContainerStyle={{
            paddingBottom:hp('5%')
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: COLORS.white,
    paddingHorizontal: wp('3%'),
  },
  txt: {
    color: COLORS.black,
    fontSize: rf(2.7),
    fontFamily: FONTFAMILY.Bold,
  },
  txt1: {
    color: COLORS.Greyscale,
    fontSize: rf(1.7),
    fontFamily: FONTFAMILY.Regular,
  },
});
