import React from 'react';
import {StyleSheet, Text, Pressable, ActivityIndicator} from 'react-native';

export const Button = ({
  customStyle,
  shadowStatus = true,
  title,
  titleStyle,
  onPress,
  isLoading = false,
  disabled = false,
}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[
        {...customStyle, justifyContent: 'center', alignItems: 'center'},
        shadowStatus ? styles.shadow : {},
      ]}>
      {!isLoading && <Text style={{...titleStyle}}>{title}</Text>}
      {isLoading && <ActivityIndicator size={'small'} color='white' />}
    </Pressable>
  );
};

export const ConfirmButton = ({onPress, textComponent, customStyle}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.confirmButtonContainer, customStyle]}>
      {textComponent}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#39192D',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  confirmButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'white',
  },
});
