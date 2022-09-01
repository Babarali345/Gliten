import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Svg, Path} from 'react-native-svg';
import { COLORS } from '../../constants/them';
export default function Home({focused}) {
  return (
    <Svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M16.5 6.21001L11.167 2.06201C10.699 1.69792 10.123 1.50024 9.53 1.50024C8.93704 1.50024 8.36101 1.69792 7.893 2.06201L2.559 6.21001C2.23844 6.4593 1.97909 6.77854 1.80076 7.14336C1.62242 7.50818 1.52981 7.90894 1.53 8.31501V15.515C1.53 16.0454 1.74071 16.5542 2.11579 16.9292C2.49086 17.3043 2.99957 17.515 3.53 17.515H15.53C16.0604 17.515 16.5691 17.3043 16.9442 16.9292C17.3193 16.5542 17.53 16.0454 17.53 15.515V8.31501C17.53 7.49201 17.15 6.71501 16.5 6.21001Z"
        fill={focused? COLORS.primary:'none'}
        stroke={focused? COLORS.primary:'#64748B'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({});
