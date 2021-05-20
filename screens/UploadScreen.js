import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, ProgressBar, TextInput } from 'react-native-paper';
import styled from 'styled-components/native'
import { UserContext } from '../App';
import { db } from '../backend/firebaseSetup';
import AppImagePicker from '../components/AppImagePicker'
const UploadScreen = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const { userData } = useContext(UserContext);

  const handleSubmit = () => {
    db.collection("products")
      .add({ title, price, description, image, email: userData.email })
  }
  return (
    <Container>
      <Heading>Upload Your Product</Heading>
      <Input
        label="Title"
        mode="outlined"
        placeholder="Enter your product title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <PriceInput
        label="Price"
        mode="outlined"
        placeholder="product price"
        value={price}
        onChangeText={(text) => setPrice(text)}
      />
      <Input
        label="Description"
        multiline
        numberOfLines={5}
        mode="outlined"
        placeholder="Enter your product description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <UploadContainer>
        <AppImagePicker setImage={setImage} />
        <UploadProgress progress={0.7} color="#34D399" />
      </UploadContainer>
      <Button icon="upload" mode="contained"
        onPress={handleSubmit}>
        submit
      </Button>
    </Container>
  )
}
export default UploadScreen;

const Container = styled.View`
 flex: 1;
 align-items: center;
 padding: 20px;
 background-color: white;
`
const Heading = styled.Text`
font-size: 30px;
color: #7C3AED;
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
const UploadContainer = styled.View`
flex-direction: row;
align-items: center;
align-self: flex-start;
margin-bottom: 20px;
`
const UploadProgress = styled(ProgressBar)`
width: 190px;
height: 25px;
margin-left: 20px;

`