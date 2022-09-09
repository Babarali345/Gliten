import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../common/responsiveFunction';
import { COLORS, FONTFAMILY } from '../constants/them';
export default function BuildYear() {
    const [selecLookTo, setLookTo] = useState(0);
    const rendorItem = ({item, index}) => {
      return (
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
          <Text style={styles.txt2}>{item.name}</Text>
        </TouchableOpacity>
      );
    };
  return (
    <View>
   <Text style={styles.txt1}>Build Year</Text>
      <View>
        <FlatList
          data={BedRoomData}
          renderItem={rendorItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          contentContainerStyle={{
            // paddingVertical: hp('1%'),
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    itemContainer: {
      backgroundColor: COLORS.skyBlueLight,
      marginRight: wp('4%'),
      marginTop: wp('3%'),
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: wp('4%'),
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
      fontSize: rf(1.5),
      color: COLORS.black,
      fontFamily: FONTFAMILY.Medium,
    },
    txt1: {
        fontSize: rf(1.6),
        color: COLORS.black,
        fontFamily: FONTFAMILY.Bold,
      marginTop:hp('2%')
    }
  });
  
  const BedRoomData = [
    {
      id: 1,
      name: '2020',
    },
    {
      id: 2,
      name: '2021',
    },
    {
      id: 3,
      name: '2021',
    },
    {
      id: 4,
      name: '2022',
    },
    {
      id: 5,
      name: '2020',
    },
    {
      id: 6,
      name: '2020',
    },
    {
      id: 7,
      name: '2020',
    },
    {
      id: 8,
      name: '2020',
    },
  ];