import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../common/responsiveFunction';
import {COLORS, FONTFAMILY} from '../constants/them';
import { PlusIconSvg } from './svg';

export default function Furnished_Area() {
  const [selecLookTo, setLookTo] = useState(0);
  const rendorItem = ({item, index}) => {
    return (
        <>
      <TouchableOpacity
        key={index}
        style={[
          styles.itemContainer,
          {
            borderColor:
              selecLookTo === index ? COLORS.primary : COLORS.Greyscale,
            backgroundColor:
              selecLookTo === index ? COLORS.skyBlueLight : COLORS.skyBlueDark,
          },
        ]}
        activeOpacity={0.8}
        onPress={() => {
          setLookTo(index);
        }}>
            <PlusIconSvg/>
        <Text style={styles.txt2}>{item.name}</Text>
      </TouchableOpacity>
        </>
    );
  };
  return (
    <View>
      <Text style={styles.txt1}>Furnished Area</Text>
      <View>
        <FlatList
          data={BedRoomData}
          renderItem={rendorItem}
          numColumns={2}
          listKey={(item) => item.name.toString()}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{
            // paddingVertical: hp('1%'),
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: COLORS.skyBlueLight,
    marginRight: wp('4%'),
    marginTop: wp('3%'),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('1%'),
    borderRadius: wp('4%'),
    borderWidth: 1,
  },
  txt3: {
    fontSize: rf(1.5),
    color: COLORS.black,
    fontFamily: FONTFAMILY.Medium,
  },
  txt2: {
    fontSize: rf(1.6),
    color: COLORS.black,
    fontFamily: FONTFAMILY.Medium,
    marginStart:wp('1%')
  },
  txt1: {
    fontSize: rf(1.6),
    color: COLORS.black,
    fontFamily: FONTFAMILY.Bold,
    marginTop:hp('2%')
  },
  moreTxt:{
    color:COLORS.primary,
    alignSelf:'flex-end',
    fontFamily:FONTFAMILY.Bold
  },
  moreContainer:{
    alignSelf:'flex-end',
  }
});

const BedRoomData = [
  {
    id: 1,
    name: 'Ready to Move',
  },
  {
    id: 2,
    name: 'Under Construction',
  },
  
  
];
