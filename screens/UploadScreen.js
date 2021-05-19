import React, { useState } from 'react';
import { Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import styled from 'styled-components/native'

const UploadScreen = () => {
  const [email, setEmail] = useState('');
  return (
    <Container>
      <Heading>Upload Your Product</Heading>
      <Input
        label="Title"
        mode="outlined"
        placeholder="Enter your product title"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <PriceInput
        label="Price"
        mode="outlined"
        placeholder="product price"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        label="Description"
        multiline
        numberOfLines={5}
        mode="outlined"
        placeholder="Enter your product description"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
    </Container>
  )
}
export default UploadScreen;

const Container = styled.View`
 flex: 1;
 align-items: center;
 padding: 20px;
`
const Heading = styled.Text`
font-size: 30px;
color: #7C3AED;
text-decoration: underline;
font-weight: bold;
margin-bottom: 20px;
`
const Input = styled(TextInput)`
margin-bottom:15px;
width:100%;
`
const PriceInput = styled(TextInput)`
margin-bottom:15px;
width:50%;
align-self: flex-start;
`