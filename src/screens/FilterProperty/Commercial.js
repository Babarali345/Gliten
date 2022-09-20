import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
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
export default function Commercial({navigation}) {
  const [selecLookTo, setLookTo] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const [onSroll, setOnScroll] = useState(0);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const vbanimationHeight = React.useRef(new Animated.Value(0)).current;
  const [VBcollapsed, setVBCollapsed] = React.useState(true);
  React.useEffect(() => {
    if (VBcollapsed) {
      vBcollapseView();
    } else {
      vBexpandView();
    }
  }, [VBcollapsed]);

  const vBtoggleCollapsed = () => {
    setVBCollapsed(!VBcollapsed);
  };

  const vBcollapseView = () => {
    Animated.timing(vbanimationHeight, {
      duration: 500,
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  const vBexpandView = () => {
    Animated.timing(vbanimationHeight, {
      duration: 700,
      toValue: 3000,
      useNativeDriver: false,
    }).start();
  };
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
      <Text style={styles.txt1}>Looking to</Text>
        <FlatList
          data={LookToData}
          renderItem={rendorItem}
          keyExtractor={(item, index) => index.toString()}
          listKey={item => item.name.toString()}
          numColumns={3}
          contentContainerStyle={{
            paddingBottom:hp('8%')
          }}
          ListFooterComponent={() => {
            return (
              <>
              {/* <LookingTo/> */}
              <FilterSearchBar 
              onPress={()=>{
                vBtoggleCollapsed();
              }}
              />
              <Animated.View
                style={
                  {
                    maxHeight: vbanimationHeight,
                  }
                }>
                    {!VBcollapsed ? (
                  <>
                 <Budget />
                  </>
                ) : null}
               
                <NoOfBedroomList />
                <TypeOfProperty />
                <BuildYear />
                <Locality />
                <Amenities />
                
                {!VBcollapsed?
                <>
                <PropertyImagVideo title={'Properties Photo'} />
                <PropertyImagVideo title={'Properties Video'} />
                </>
                :null
              }
              
                <Furnished_Area />
                {!VBcollapsed ? (
                  <>
                 <Area />
                  </>
                ) : null}
                
                <Possesion_Status />
              </Animated.View>
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
