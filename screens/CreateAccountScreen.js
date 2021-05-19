import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import styled from 'styled-components/native'

const CreateAccountScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log("sign in")
  }
  return (
    <Container>
      <AppText>Provide your information</AppText>
      <Input
        label="Name"
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
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
      <Button mode="contained"
        onPress={handleSignIn}>
        Sing IN
      </Button>
    </Container>
  )
}
export default CreateAccountScreen;

const Container = styled.View`
 flex:1;
 align-items:center;
 padding:20px;
`
const Input = styled(TextInput)`
margin-bottom:15px;
width:100%;
`
const AppText = styled.Text`
margin-top: 50px;
margin-bottom: 50px;
font-size: 22px;
`