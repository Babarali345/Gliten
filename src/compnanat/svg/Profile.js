import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Svg, Path} from 'react-native-svg';
import { COLORS } from '../../constants/them';
export default function Profile({focused}) {
  return (
    <Svg
      width="15"
      height="21"
      viewBox="0 0 15 21"
      fill={focused? COLORS.primary:'none'}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7.5 9.5C9.70914 9.5 11.5 7.70914 11.5 5.5C11.5 3.29086 9.70914 1.5 7.5 1.5C5.29086 1.5 3.5 3.29086 3.5 5.5C3.5 7.70914 5.29086 9.5 7.5 9.5Z"
        stroke="#64748B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1.5 19.5V17.5C1.5 16.4391 1.92143 15.4217 2.67157 14.6716C3.42172 13.9214 4.43913 13.5 5.5 13.5H9.5C10.5609 13.5 11.5783 13.9214 12.3284 14.6716C13.0786 15.4217 13.5 16.4391 13.5 17.5V19.5"
        stroke="#64748B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({});
