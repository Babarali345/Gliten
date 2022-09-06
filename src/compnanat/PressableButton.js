import {StyleSheet, Text, View,Pressable,Image} from 'react-native';
import React from 'react';

const PressableOpacityButton = ({title, onTap}) => {
    return (
      <Pressable
        onPress={onTap}
        style={({ pressed }) => [
          {
            opacity: pressed
              ? 0.2
              : 1,
            backgroundColor: '#2277ee'
          },
          styles.button,
        ]}>
          <Text style={styles.buttonText}>{ title }</Text>
      </Pressable>
    );
  }
  
  const PressableHighlightButton = ({title, onTap}) => {
    return (
      <Pressable
        onPress={onTap}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? '#55aaff'
              : '#2277ee'
          },
          styles.button
        ]}>
          <Text style={styles.buttonText}>{ title }</Text>
      </Pressable>
    );
  }
  
  const ZoomButton = ({title, onTap}) => {
    return (
      <Pressable
        onPress={onTap}
        style={({ pressed }) => [
          {
            transform: [{
              scale: pressed ? 1.07 : 1
            }],
            backgroundColor: '#2277ee'
          },
          styles.button
        ]}>
          <Text style={styles.buttonText}>{ title }</Text>
      </Pressable>
    );
  }
  
  const RotatingButton = ({title, onTap}) => {
    return (
      <Pressable
        onPress={onTap}
        style={({ pressed }) => [
          {
            transform: [{
              rotate: pressed ? '-3deg' : '0deg'
            }],
            backgroundColor: '#2277ee'
          },
          styles.button
        ]}>
          <Text style={styles.buttonText}>{ title }</Text>
      </Pressable>
    );
  }
  
  const ComplexButton = ({title, onTap}) => {
    return (
      <Pressable
        onPress={onTap}
        android_ripple={{color: 'white'}}
        style={({ pressed }) => [
          pressed && {
            transform: [{
              rotate: '-2deg'
            },{
              scale: 0.98
            }]
          },
          {
            backgroundColor: '#2277ee'
          },
          styles.button,
        ]}>
          {({pressed}) => (
            <Text style={[styles.buttonText, pressed && {color: '#4453aa'}]}>{ title }</Text>
          )}
      </Pressable>
    );
  }
export default function PressableButton({onTap,style}) {
  return (
    <Pressable
    onPress={onTap}
    style={({ pressed }) => [
      {
        opacity: pressed
          ? 0.2
          : 1,
        backgroundColor: '#2277ee'
      },
      styles.button,
    ]}>
      <Text style={styles.buttonText}>{ title }</Text>
  </Pressable>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 36,
    },
    button: {
      padding: 12,
      marginBottom: 20,
      borderRadius: 6,
    },
    buttonText: {
      fontSize: 20,
      textAlign: 'center'
    },
  });
