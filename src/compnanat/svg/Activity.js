import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Svg, Path} from 'react-native-svg';
import { COLORS } from '../../constants/them';
export default function Activity({focused}) {
  return (
    <Svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill={focused? COLORS.primary:'none'}
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
      stroke={focused? COLORS.primary:'#64748B'}
      stroke-width="1.15"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M12 6.5V12.5L16 14.5"
      stroke={focused? COLORS.white:'#64748B'}
      stroke-width="1.15"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
  )
}

const styles = StyleSheet.create({})