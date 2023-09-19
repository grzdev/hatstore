import { ScrollView, Image, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackBtn, Button } from '../../components';
import { Formik } from 'formik';
import * as Yup from "yup"
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"
import { COLORS, SIZES } from '../../constants';
import styles from './register.style';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Provide a valid email address').required('Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Required'),
    location: Yup.string()
    .min(3, 'Provide a valid location')
    .required('Required'),
    username: Yup.string()
    .min(3, 'Provide a valid username')
    .required('Required'),
});

const Register = ({navigation}) => {
  const [ loader, setLoader ] = useState(false);
  const [ obsecureText, setObsecureText ] = useState(false)

  const invalidForm = () => {
      Alert.alert(
        "Invaid Form",
        "Please provide all required field",
        [
          {
            text: "Cancel",
            onPress: ()=> {}
          },
          {
            text: "Continue",
            onPress: ()=> {}
          },
          {
            defaultIndex: 1
          }
        ]
      )
    }

  return (
    <ScrollView
        style={{backgroundColor: COLORS.primary, padding: 20}}
    >
    <SafeAreaView
        // style={{marginHorizontal: 20}}
    >
        <View>
            <BackBtn
                onPress={()=> navigation.goBack()}
            /> 
            <Text
                style={styles.title}
            >
                Create an account
            </Text>
            
            <Formik
                initialValues={{email: "", password: "", location: "", username: ""}}
                validationSchema={validationSchema}
                onSubmit={(values)=> console.log(values)}
            >
                {({ handleChange, handleBlur,touched , handleSubmit, values, errors, isValid, setFieldTouched }) => (
                    <View>
                      {/* Username Input */}
                      <View
                            style={styles.wrapper}
                        >
                            <Text
                                style={styles.label}
                            >
                                Username
                            </Text>
                            <View
                                style={styles.inputWrapper(touched.username ? COLORS.primary: COLORS.offwhite)}
                            >
                             <MaterialCommunityIcons
                                name='face-man-profile'
                                size={20}
                                color= {COLORS.gray}
                                style={styles.iconStyle}
                             />
                             <TextInput
                                placeholder='Enter username'
                                onFocus={()=> {setFieldTouched("username")}}
                                onBlur={()=> {setFieldTouched("username", "")}}
                                value={values.username}
                                onChangeText={handleChange("username")}
                                autoCapitalize='none'
                                autoCorrect= {false}
                                style={{flex: 1}}
                             />
                            </View>
                            {touched.username && errors.username && (
                                <Text
                                    style={styles.errorMessage}
                                >
                                    {errors.username}
                                </Text>
                            )}
                        </View>

                        {/* Email Input */}
                        <View
                            style={styles.wrapper}
                        >
                            <Text
                                style={styles.label}
                            >
                                Email
                            </Text>
                            <View
                                style={styles.inputWrapper(touched.email ? COLORS.primary: COLORS.offwhite)}
                            >
                             <MaterialCommunityIcons
                                name='email-outline'
                                size={20}
                                color= {COLORS.gray}
                                style={styles.iconStyle}
                             />
                             <TextInput
                                placeholder='Enter email'
                                onFocus={()=> {setFieldTouched("email")}}
                                onBlur={()=> {setFieldTouched("email", "")}}
                                value={values.email}
                                onChangeText={handleChange("email")}
                                autoCapitalize='none'
                                autoCorrect= {false}
                                style={{flex: 1}}
                             />
                            </View>
                            {touched.email && errors.email && (
                                <Text
                                    style={styles.errorMessage}
                                >
                                    {errors.email}
                                </Text>
                            )}
                        </View>

                        {/* Location Input */}
                        <View
                            style={styles.wrapper}
                        >
                            <Text
                                style={styles.label}
                            >
                                Location
                            </Text>
                            <View
                                style={styles.inputWrapper(touched.location ? COLORS.primary: COLORS.offwhite)}
                            >
                             <Ionicons
                                name='location'
                                size={20}
                                color= {COLORS.gray}
                                style={styles.iconStyle}
                             />
                             <TextInput
                                placeholder='Enter location'
                                onFocus={()=> {setFieldTouched("location")}}
                                onBlur={()=> {setFieldTouched("location", "")}}
                                value={values.location}
                                onChangeText={handleChange("location")}
                                autoCapitalize='none'
                                autoCorrect= {false}
                                style={{flex: 1}}
                             />
                            </View>
                            {touched.location && errors.location && (
                                <Text
                                    style={styles.errorMessage}
                                >
                                    {errors.location}
                                </Text>
                            )}
                        </View>

                        {/* Password Input */}
                        <View
                            style={styles.wrapper}
                        >
                            <Text
                                style={styles.label}
                            >
                                Password
                            </Text>
                            <View
                                style={styles.inputWrapper(touched.password ? COLORS.primary: COLORS.offwhite)}
                            >
                             <MaterialCommunityIcons
                                name='lock-outline'
                                size={20}
                                color= {COLORS.gray}
                                style={styles.iconStyle}
                             />
                             <TextInput
                                secureTextEntry= {obsecureText}
                                placeholder='Enter password'
                                onFocus={()=> {setFieldTouched("password")}}
                                onBlur={()=> {setFieldTouched("password", "")}}
                                value={values.password}
                                onChangeText={handleChange("password")}
                                autoCapitalize='none'
                                autoCorrect= {false}
                                style={{flex: 1}}
                             />
                             <TouchableOpacity
                                onPress={()=> {setObsecureText(!obsecureText)}}
                             >
                                <MaterialCommunityIcons
                                    name={obsecureText ? "eye-outline" : "eye-off-outline"}
                                    size={18}
                                />
                             </TouchableOpacity>
                            </View>
                            {touched.password && errors.password && (
                                <Text
                                    style={styles.errorMessage}
                                >
                                    {errors.password}
                                </Text>
                            )}
                        </View>
                        <Button
                            title={"S I G N U P"}
                            onPress={ isValid ? handleSubmit : invalidForm }
                            isValid={isValid}
                        />
                        <Text
                            onPress={()=> navigation.navigate("Login")}
                            style={styles.registration}
                        >
                            Got an account? Login
                        </Text>
                    </View>
                )}
            </Formik>
        </View>
    </SafeAreaView>
</ScrollView>
  )
}

export default Register
