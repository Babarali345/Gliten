import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../common/responsiveFunction';
import {COLORS, FONTFAMILY, STYLES} from '../constants/them';

export default function FiterOptionList({onSelecItem}) {
  const [selctedItem, setSelectedItem] = useState('Buy');
  const rendorItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.itemContainer,
        
          {
            borderColor:
              selctedItem === item.name ? COLORS.primary : COLORS.Greyscale,
            backgroundColor:
              selctedItem === item.name ? COLORS.skyBlueLight : COLORS.skyBlueDark,
          },
        ]}
        activeOpacity={0.8}
        onPress={() => {
          setSelectedItem(item.name);
          onSelecItem(item.name)
        }}>
        <Text style={styles.txt2}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={LookToData}
        renderItem={rendorItem}
        keyExtractor={(item, index) => index.toString()}
        listKey={item => item.name.toString()}
        horizontal
        contentContainerStyle={{
          marginTop:hp('6%'),
          paddingHorizontal:wp('2%'),
          paddingVertical:hp('1%')
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: COLORS.skyBlueLight,
    marginRight: wp('4%'),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1%'),
    borderRadius: wp('4%'),
    borderWidth: 1,
  },
  txt2: {
    fontSize: rf(1.6),
    color: COLORS.black,
    fontFamily: FONTFAMILY.Medium,
    marginStart: wp('1%'),
  },
  txt1: {
    fontSize: rf(1.6),
    color: COLORS.black,
    fontFamily: FONTFAMILY.Bold,
    marginTop: hp('2%'),
  },
});
const LookToData = [
  {
    id: 1,
    name: 'Buy',
  },
  {
    id: 2,
    name: 'Rent',
  },
  {
    id: 3,
    name: 'Building Construction',
  },
  {
    id: 4,
    name: 'Cultivable Land',
  },
  {
    id: 5,
    name: 'Office',
  },
  {
    id: 6,
    name: 'Architect',
  },
  {
    id: 7,
    name: 'Sign Board',
  },
  {
    id: 8,
    name: 'Builder',
  },
];
