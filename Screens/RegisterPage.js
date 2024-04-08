import React from "react";
import { Button, TextInput, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
const RegisterPage = () => {
    
  return (
  <View>

    <Formik
        initialValues={{ email: '' }}
        onSubmit={values => console.log(values)}
        handleChange={values => console.log(values)}
    >  
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View style={styles.page}>
         <TextInput 
           style={styles.rectangle}
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
           placeholder="Email"
         />

        <TextInput
           style={styles.rectangle}
           onChangeText={handleChange('password')}
           onBlur={handleBlur('password')}
           value={values.password}
           placeholder="Password"
         />

        <TextInput
           style={styles.rectangle}
           onChangeText={handleChange('confirmPassword')}
           onBlur={handleBlur('confirmPassword')}
           value={values.password}
           placeholder="confirmPassword"
         />
         <Button onPress={handleSubmit} title="Submit" />
       </View>
     )}

   </Formik>
   </View>
  );
}
const styles = StyleSheet.create({
    page: {
      width: "100%",
      height: "100%",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      padding: 30,
    },
  
    rectangle: {
      marginTop: 10,
      width: "100%",
      height: 50,
      backgroundColor: 'grey',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
  });
export default RegisterPage;