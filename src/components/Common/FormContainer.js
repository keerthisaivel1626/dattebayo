import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import { height,width } from '../../utils/data';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const FormContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>
        <KeyboardAwareScrollView
          bounces={false}
          keyboardShouldPersistTaps={'always'}
          contentContainerStyle={{}}
          showsVerticalScrollIndicator={false}>
          {children}
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default FormContainer;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: hp('65%'),
    backgroundColor: 'white',   
    borderTopEndRadius: height * 0.08,
    paddingTop: 5,
   
  },
  childContainer: {
    width:width,
    height: hp('55%'),
    backgroundColor: 'white',   
    borderTopEndRadius: height * 0.08,
    paddingHorizontal: 10,
  },
});
