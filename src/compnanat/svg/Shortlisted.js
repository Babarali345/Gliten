import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Svg, Path} from 'react-native-svg';
import { COLORS } from '../../constants/them';
export default function Shortlisted({focused}) {
  return (
    <Svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill={focused? COLORS.primary:'none'}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.87187 10.0983C0.798865 6.74832 2.05287 2.91932 5.56987 1.78632C7.41987 1.18932 9.46187 1.54132 10.9999 2.69832C12.4549 1.57332 14.5719 1.19332 16.4199 1.78632C19.9369 2.91932 21.1989 6.74832 20.1269 10.0983C18.4569 15.4083 10.9999 19.4983 10.9999 19.4983C10.9999 19.4983 3.59787 15.4703 1.87187 10.0983Z"
        stroke="#64748B"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({});
