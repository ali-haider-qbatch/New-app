import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Logo from './Logo';
import Inputs from './Inputs';
import Buttons from './Buttons';

function SignIn({navigation}) {
  const titleText = 'Welcome Back to the Discount';
  const forgetPassword = 'Forget Password?';
  const havingAccount = "Don't have an Account?";
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Logo />

      <Text style={styles.titleText}>{titleText}</Text>
      <Inputs placeholder="Email" />
      <Inputs placeholder="Password" />
      <Text
        onPress={() =>
          navigation.navigate('ForgetPassword', {name: 'ForgetPassword'})
        }
        style={styles.forgetPassword}>
        {forgetPassword}
      </Text>
      <Buttons
        name="Log In"
        onPress={() =>
          navigation.navigate('NavigationScreen', {name: 'NavigationScreen'})
        }
      />
      <View style={styles.AccountView}>
        <Text style={styles.Account}>{havingAccount}</Text>
        <Text
          style={styles.signUp}
          onPress={() => navigation.navigate('SignUp', {name: 'SignUp'})}>
          Sign Up
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  SafeAreaView: {
    margin: '5%',
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingTop: '3%',
    paddingBottom: 10,
    color: '#000',
    fontFamily: 'Avenir-Book',
  },
  forgetPassword: {
    display: 'flex',
    textAlign: 'right',
    fontSize: 12,
    margin: 10,
    color: '#5B5B5A',
  },
  Account: {
    fontSize: 12,
    margin: '2%',
    textAlign: 'center',
    color: 'grey',
    paddingLeft: 10,
  },
  signUp: {
    fontWeight: '600',
    fontSize: 14,
    color: '#000',
    paddingRight: 8,
    marginTop: 5,
  },
  AccountView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default SignIn;
