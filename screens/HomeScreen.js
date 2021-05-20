import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Alert, Button, FlatList } from 'react-native';
import styled from 'styled-components/native'
import { db } from '../backend/firebaseSetup';
import AppCard from '../components/AppCard';

const HomeScreen = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const unsubscribe = db.collection("products").get()
      .then((snapshot) => {
        const user = [];
        snapshot.docs.map(doc => user.unshift({ ...doc.data(), id: doc.id }))
        setData(user)
      })
      .catch(err => Alert.alert("didn't get data", err))
    return unsubscribe;
  }, [])

  const getProducts = () => {

    console.log(data)
  };

  const handleRefresh = () => {
    getProducts();
  }

  return (
    <Container>
      <Button title="click me" onPress={handleRefresh} />
      <FlatList
        data={data}
        renderItem={({ item }) =>
        (<AppCard userName={item.userName} userImage={item.userImage}
          productName={item.productName} description={item.description}
          price={item.price} productImage={item.productImage} />)}
        keyExtractor={item => item.id}
        refreshing={false}
        onRefresh={handleRefresh}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
export default HomeScreen;

const Container = styled.View`
 flex: 1;
 align-items: center;
 padding: 10px;
 background-color: white;
`