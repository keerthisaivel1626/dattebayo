import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar, Image, Keyboard, TouchableOpacity} from 'react-native';
import {Button} from '../components/Common/Button';
import FormContainer from '../components/Common/FormContainer'
import {InputBox} from '../components/Common/InputBox';
import {
  REGULAR_VERTICAL_SPACE,
  SMALL_VERTICAL_SPACE,
  VERY_SMALL_VERTICAL_SPACE,
  SMALL,
  width,
  height,
  REGULAR,
  VERY_SMALL,
  BIG_VERTICAL_SPACE,
  MEDIUM_VERTICAL_SPACE,
} from '../utils/data';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import * as yup from 'yup';
import {Formik} from 'formik';
const LoginScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  let schema = yup.object().shape({
    phone: yup
      .string()
      .length(10, 'Invalid phone number')
      .required('Phone number is required'),
  });
 
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <Image
        source={require('../assets/photo1.webp')}
        style={styles.backgroundImage}
      />
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Formik
          initialValues={{phone: ''}}
          validationSchema={schema}
          onSubmit={values => navigation.navigate('HomeScreen')}>
          {({
            errors,
            touched,
            handleSubmit,
            handleChange,
            values,
            dirty,
            resetForm,
          }) => {
            return (
              <FormContainer>
                <View style={{height: REGULAR_VERTICAL_SPACE}} />
                <Text style={styles.headerLabel}>Hi,</Text>
                <Text style={styles.headerLabel}>Sign in to continue</Text>
                <Text style={styles.description}>
                  Please enter your phone number to get access
                </Text>

                <InputBox
                  value={values.phone}
                  onChangeText={handleChange('phone')}
                  errorStyle={
                    (dirty && touched?.phone && errors.phone) ||
                    (!dirty && errors.phone) ||
                    (dirty && errors.phone)
                      ? {
                          borderBottomWidth: 1,
                          borderColor: 'red',
                        }
                      : {
                          borderBottomWidth: 1,
                          borderColor: 'green',
                        }
                  }
                  resetForm={resetForm}
                />
                <Text
                  style={{
                    fontSize: VERY_SMALL,
                    color: 'blue',
                    paddingLeft: hp(3),
                  }}>
                  An OTP will be sent to this Number
                </Text>

                {errors.phone ? (
                  <>
                    <View style={{height: SMALL_VERTICAL_SPACE}} />
                    <Text style={styles.errorText}>{errors.phone}</Text>
                  </>
                ) : (
                  <View style={{height: SMALL_VERTICAL_SPACE}} />
                )}

                <Button
                  title={'GET OTP'}
                  customStyle={{
                    height: 60,
                    backgroundColor: 'orange',
                    borderRadius: 50,
                  }}
                  shadowStatus={true}
                  titleStyle={{
                    color: 'white',
                    fontSize: SMALL,
                  }}
                  onPress={handleSubmit}
                />
                {errors.phone && (
                  <View>
                    <View style={{alignItems: 'center'}}>
                      <Text style={styles.description}>
                        By Signing up, i agree to the
                        <TouchableOpacity style={{alignItems: 'flex-end'}}>
                          <Text
                            style={{
                              color: 'blue',
                              textDecorationLine: 'underline',
                            }}>
                            {' '}
                            Terms &Conditions
                          </Text>
                        </TouchableOpacity>
                      </Text>
                      <Text>of Metropolis</Text>
                    </View>
                  </View>
                )}

                <View style={{height: MEDIUM_VERTICAL_SPACE}} />
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.description}>
                    By Signing up, i agree to the
                    <TouchableOpacity style={{alignItems: 'flex-end'}}>
                      <Text
                        style={{
                          color: 'blue',
                          textDecorationLine: 'underline',
                        }}>
                        {' '}
                        Terms &Conditions
                      </Text>
                    </TouchableOpacity>
                  </Text>
                  <Text>of Metropolis</Text>
                </View>
              </FormContainer>
            );
          }}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: width,
    height:height,
  },
  logoImage: {
    alignSelf: 'center',
    width:width* 0.4,
    resizeMode: 'contain',
  },
  formContainer: {
    width: width,
    height: height * 0.5,
  },
  headerLabel: {
    fontSize: REGULAR,
   
    color: 'black',
   
  },
  description: {
    fontSize: SMALL,
    color: 'gray',    
   
  },
  textBoxlabel: {
    fontSize: VERY_SMALL,
    color: 'black',
   
  },
  errorText: {
    color: 'red',
    alignSelf: 'center',
  },
});
export default LoginScreen;
