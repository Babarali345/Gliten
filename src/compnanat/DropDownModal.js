import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React, { useRef, useState } from 'react'
import ModalDropdown from 'react-native-modal-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { COLORS, FONTFAMILY, STYLES } from '../constants/them';
import {
    heightPercentageToDP as hp,
    responsiveFontSize as rf,
    widthPercentageToDP as wp,
  } from '../common/responsiveFunction';
export default function DropDownModal({Data}) {
    const ref = useRef();
    const [showDepartmentModal, setShowDepartmentModal] = useState(false);
  const [isDptselect, setIsSelectDpt] = useState(false);
  const [selectDepartment, setSelectedDepartment] = useState('');
  const onSelect = (ind, valu) => {
    setSelectedDepartment(valu);
    setIsSelectDpt(false);
  };
  return (
    <ModalDropdown
          options={Data}
          ref={ref}
          style={{}}
          dropdownStyle={[
            STYLES.shadow,
            {
              width: wp('50%'),
              height: hp('34%'),
              marginLeft: wp('2%'),
              borderWidth: 0,
              borderRadius: wp('2%'),
              overflow: 'hidden',
            },
          ]}
          dropdownTextStyle={{
            fontFamily: FONTFAMILY.Medium,
            fontSize: rf(1.2),
            color: COLORS.Greyscale,
            backgroundColor: COLORS.white,
          }}
          dropdownTextHighlightStyle={{
            fontFamily: FONTFAMILY.Medium,
            fontSize: rf(1.2),
            color: COLORS.primary,
          }}
          onSelect={onSelect}>
          <TouchableOpacity
            style={[styles.dropDowncontainer]}
            onPress={() => {
              ref.current.show();
              setIsSelectDpt(true);
            }}>

            <View style={styles.departmentContainer}>
              <Text style={styles.txt2}>
                {selectDepartment === ''
                  ? 'Select Year of Building'
                  : selectDepartment}
              </Text>
              <AntDesign
                name={isDptselect ? 'down' : 'right'}
                style={styles.down}
              />
            </View>
          </TouchableOpacity>
    </ModalDropdown>
  )
}

const styles = StyleSheet.create({
    dropDowncontainer: {
        borderWidth: 1,
        borderRadius: wp('2%'),
        paddingHorizontal: wp('2%'),
        height:hp('8%'),
        marginTop: hp('2%'),
        borderColor:COLORS.Greyscale,
        backgroundColor:COLORS.transparent
      },
      icon: {
        fontSize: rf(3),
        color: COLORS.Greyscale,
      },
      departmentContainer: {
        flex: 1,
        paddingVertical: hp('2.5%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:COLORS.transparent
      },
      down: {
        fontSize: rf(2),
        color: COLORS.Greyscale,
      },
        txt2: {
            marginStart: wp('2%'),
            color: COLORS.Greyscale,
            fontFamily: FONTFAMILY.Medium,
            fontSize: rf(1.4),
        },
})

