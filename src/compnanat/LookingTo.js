import { FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import {
    heightPercentageToDP as hp,
    responsiveFontSize as rf,
    widthPercentageToDP as wp,
  } from '../common/responsiveFunction';
import { COLORS, FONTFAMILY } from '../constants/them';

export default function LookingTo() {
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
         <Text style={styles.txt1}>Looking to</Text> 
      <FlatList
          data={LookToData}
          renderItem={rendorItem}
          keyExtractor={(item, index) => index.toString()}
          listKey={(item) => item.name.toString()}
          numColumns={3}
          contentContainerStyle={{
            paddingBottom: hp('8%'),
          }}
          />
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
})

const LookToData = [
    {
      id: 1,
      name: 'Buy',
    },
    {
      id: 2,
      name: 'RENT',
    },
    {
      id: 3,
      name: 'Student/PG',
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