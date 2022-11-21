import React from 'react';
import {StyleSheet, View, TextInput,Text, Pressable} from 'react-native';
import {
  MEDIUM,
  SMALL_VERTICAL_SPACE,
  MEDIUM_SMALL_VERTICAL_SPACE,
} from '../../utils/data';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export const InputBox = ({value, onChangeText, errorStyle = {}, resetForm}) => {
  return (
    <View style={{...styles.container, ...errorStyle}}>
      <Text style={{fontSize: MEDIUM}}>+91</Text>

      <TextInput
        maxLength={10}
        keyboardType="number-pad"
        style={styles.inputBox}
        returnKeyType={'done'}
        returnKeyLabel={'Close'}
        value={value}
        onChangeText={onChangeText}
      />

      <View style={{alignItems: 'flex-end'}}>
        <Pressable
          android_ripple={{color: '#ccc'}}
          style={({pressed}) => [
            styles.buttonContainer,
            pressed ? styles.pressableButtonContainer : null,
          ]}
          onPress={ resetForm}>
          <MaterialIcons
            color={'red'}
            name="clear"
            size={MEDIUM_SMALL_VERTICAL_SPACE}
          />
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 60,
    borderRadius: 20,
    flexDirection: 'row',
    paddingHorizontal: 15,
    overflow: 'hidden',
    borderBottomWidth: 1,
    alignItems:'center'
  },
  inputBox: {
   width:'78%',
    paddingLeft: SMALL_VERTICAL_SPACE,
    color: 'black',
    fontSize: MEDIUM,
   
  },
});
