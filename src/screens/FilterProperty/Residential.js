import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Switch,
  Animated
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTFAMILY, SCREENS} from '../../constants/them';
import {
  heightPercentageToDP as hp,
  responsiveFontSize as rf,
  widthPercentageToDP as wp,
} from '../../common/responsiveFunction';
import FilterSearchBar from '../../compnanat/FilterSearchBar';
import Budget from '../../compnanat/BudgetList';
import NoOfBedroomList from '../../compnanat/NoOfBedroomList';
import TypeOfProperty from '../../compnanat/TypeOfProperty';
import BuildYear from '../../compnanat/BuildYear';
import Locality from '../../compnanat/Locality';
import Amenities from '../../compnanat/Amenities';
import Furnished_Area from '../../compnanat/Furnished_Area';
import Area from '../../compnanat/Area';
import Possesion_Status from '../../compnanat/Possesion_Status';
import Button from '../../compnanat/Button';
import LookingTo from '../../compnanat/LookingTo';
export default function Residential({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  

  const PropertyImagVideo = ({title}) => {
    return (
      <View style={styles.PropertyImagVideoCOntainer}>
        <Text style={[styles.txt1, {fontSize: rf(1.7)}]}>{title}</Text>
        <Switch
          trackColor={{false: COLORS.Greyscale, true: COLORS.primary}}
          thumbColor={isEnabled ? COLORS.white : COLORS.primary}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={null}
          renderItem={null}
          contentContainerStyle={{
            paddingBottom: hp('8%'),
          }}
          ListFooterComponent={() => {
            return (
              <>
              <LookingTo/>
                <FilterSearchBar />
                <Budget />
                <NoOfBedroomList />
                <TypeOfProperty />
                <BuildYear />
                <Locality />
                <Amenities />
                <PropertyImagVideo title={'Properties Photo'} />
                <PropertyImagVideo title={'Properties Video'} />
                <Furnished_Area />
                <Area />
                <Possesion_Status />
                <Button
                  title={'Search'}
                  style={{marginTop: hp('8%')}}
                  onPress={() => {
                    navigation.navigate(SCREENS.FilterSearchList);
                  }}
                />
              </>
            );
          }}
        />
      </View>
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
    fontSize: rf(1.6),
    color: COLORS.black,
    fontFamily: FONTFAMILY.Bold,
    marginTop: hp('2%'),
  },
  txt2: {
    fontSize: rf(1.5),
    color: COLORS.black,
    fontFamily: FONTFAMILY.Medium,
  },
  txt3: {
    fontSize: rf(1.5),
    color: COLORS.black,
    fontFamily: FONTFAMILY.Medium,
  },
  PropertyImagVideoCOntainer: {
    marginTop: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});


