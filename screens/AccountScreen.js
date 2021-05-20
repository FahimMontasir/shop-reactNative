import React, { useEffect, useContext, useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, Button, Paragraph, Surface, Title } from 'react-native-paper';
import styled from 'styled-components/native'
import { UserContext } from '../App';
import { db } from '../backend/firebaseSetup';
import AppCard from '../components/AppCard';

const AccountScreen = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products").where("email", "==", userData.email).get()
      .then((snapshot) => console.log(snapshot.docs))
  }, []);

  const handleLogout = () => {
    setUserData(null)
  };

  return (
    <Container>
      <ProfileContainer>
        <Avatar.Image size={100} source={require('../assets/shop.png')} />
        <Title>{userData.email}</Title>
        <Paragraph>Top rated seller🔥</Paragraph>
      </ProfileContainer>
      <Title>Your added product</Title>
      <FlatList
        data={products}
        renderItem={({ item }) => (<AppCard deleteIcon id={item.id}
          productName={item.productName} description={item.description}
          price={item.price}
        />)}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />

      <LogoutContainer>
        <Button icon="logout" mode="contained"
          color="#FBBF24"
          onPress={handleLogout}>
          Logout
      </Button>
      </LogoutContainer>
    </Container>
  )
}
export default AccountScreen;

const Container = styled.View`
 flex: 1;
 align-items: center;
 padding: 10px;
 background-color: white;
`
const ProfileContainer = styled(Surface)`
align-items: center;
padding: 20px;
margin-bottom: 10px;
border-radius: 50px;
background-color: #F3F4F6;
`
const LogoutContainer = styled.View`
position: absolute;
bottom: 0px;
background-color: #F3F4F6;
height: 100px;
width: 200px;
padding: 30px;
border-radius: 100px
`