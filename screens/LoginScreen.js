import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import styled from 'styled-components/native'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("login")
  }
  return (
    <Container>
      <Logo source={require("../assets/shop.png")} />
      <Input
        label="Email"
        mode="outlined"
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        label="Password"
        mode="outlined"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        right={<Input.Icon name="eye" color="purple" />}
      />
      <Button icon="login" mode="contained"
        onPress={handleLogin}>
        Login
      </Button>
      <AppText>don't you have any account?</AppText>
      <Button mode="default" onPress={() => navigation.navigate("register")}>
        create one..
      </Button>
    </Container>
  )
}
export default LoginScreen;

const Container = styled.View`
 flex:1;
 align-items:center;
 padding:20px;
 background-color: white;
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
const AppText = styled.Text`
margin-top: 10px;
font-size: 20px;
`