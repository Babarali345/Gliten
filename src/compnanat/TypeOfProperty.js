import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../common/responsiveFunction';
import {COLORS, FONTFAMILY} from '../constants/them';
import { PlusIconSvg } from './svg';

export default function TypeOfProperty() {
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

           {index===BedRoomData.length-1?
           <TouchableOpacity style={styles.moreContainer}
           activeOpacity={0.8}
           >
            <Text style={styles.moreTxt}>+ 3 More</Text>
            </TouchableOpacity>
            :null
        }
        </>
    );
  };
  return (
    <View>
      <Text style={styles.txt1}>Type Of Property</Text>
      <View>
        <FlatList
          data={BedRoomData}
          renderItem={rendorItem}
          numColumns={2}
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
    flexDirection:'row',
    marginRight: wp('4%'),
    marginTop: wp('3%'),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp('3%'),
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
    name: 'Residential Apartment',
  },
  {
    id: 2,
    name: 'Independent House/villa',
  },
  {
    id: 3,
    name: 'Builder Floor',
  },
  
];
