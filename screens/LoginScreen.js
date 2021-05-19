import React, { useState } from 'react';
import { Platform, StatusBar } from 'react-native';
import { TextInput } from 'react-native-paper';
import styled from 'styled-components/native'

const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Logo source={require("../assets/shop.png")} />
      <Input
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        right={<Input.Icon name="eye" color="purple" />}
      />

    </Container>
  )
}
export default LoginScreen;

const Container = styled.KeyboardAvoidingView`
 flex:1;
 align-items:center;
 padding:20px;
`
const Logo = styled.Image`
width:250px;
height:250px;
margin: 20px 0;
`
const Input = styled(TextInput)`
margin-bottom:15px;
width:100%;
`