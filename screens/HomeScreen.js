import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Alert, FlatList, Image } from 'react-native';
import styled from 'styled-components/native'
import { db } from '../backend/firebaseSetup';
import AppCard from '../components/AppCard';

const HomeScreen = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    db.collection("products").get()
      .then((snapshot) => {
        const product = [];
        snapshot.docs.map(doc => product.unshift({ ...doc.data(), id: doc.id }))
        setData(product)
      })
      .catch(err => Alert.alert("didn't get data", err))
  }, [])
  const handleRefresh = () => {
    db.collection("products").get()
      .then((snapshot) => {
        const product = [];
        snapshot.docs.map(doc => product.unshift({ ...doc.data(), id: doc.id }))
        setData(product)
      })
  }
  return (
    <Container>
      <FlatList
        data={data}
        renderItem={({ item }) =>
        (<AppCard email={item.email}
          productName={item.title} description={item.description}
          price={item.price} productImage />)}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        refreshing={false}
        onRefresh={handleRefresh}
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