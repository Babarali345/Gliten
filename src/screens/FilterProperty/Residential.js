import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTFAMILY} from '../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';
import FilterSearchBar from '../../compnanat/FilterSearchBar';
import MultiSlider from '@ptomasroos/react-native-multi-slider'
export default function Residential() {
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
  const [multiSliderValue, setMultiSliderValue] = React.useState([3, 7]);
  return (
    <View style={styles.container}>
      <Text style={styles.txt1}>Looking to</Text>
      <View>
        <FlatList
          data={LookToData}
          renderItem={rendorItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          contentContainerStyle={{
            paddingVertical: hp('1%'),
          }}
        />
      </View>
      <FilterSearchBar />
      <Text style={styles.txt1}>Budget</Text>
      <MultiSlider
          values={[multiSliderValue[0], multiSliderValue[1]]}
          // sliderLength={'100%'}
          onValuesChange={()=>{
          }}
         selectedStyle={{
          backgroundColor:COLORS.golden
         }}
         markerStyle={{
          backgroundColor:COLORS.golden
         }}
          min={0}
          max={10}
          step={1}
          allowOverlap
          snapped
          // customLabel={CustomLabel}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: wp('3%'),
  },
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
  txt1: {
    fontSize: rf(2),
    color: COLORS.black,
    fontFamily: FONTFAMILY.SemiBold,
    marginTop: hp('2%'),
  },
  txt2: {
    fontSize: rf(1.5),
    color: COLORS.black,
    fontFamily: FONTFAMILY.Medium,
  },
});

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
