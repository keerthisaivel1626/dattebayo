import { View, Text, Pressable } from 'react-native'
import React from 'react'

const IconButton = () => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[
        {...customStyle, justifyContent: 'center', alignItems: 'center'},
        shadowStatus ? styles.shadow : {},
      ]}>
     <></>
    </Pressable>
  );
}

export default IconButton