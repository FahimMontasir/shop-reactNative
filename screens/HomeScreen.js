import React from 'react';
import { useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native'
import AppCard from '../components/AppCard';
const DATA = [
  { id: 1425, productName: "hello product", price: "100", description: "this is really  a good product" },
  { id: 145, productName: "dj product", price: "00", description: "this is really  a good product" },
  { id: 45, productName: "Faltu product", price: "1030", description: "this is really  a good product" },
  { id: 25, productName: "Faltu product", price: "1030", description: "this is really  a good product" },
  { id: 4253, productName: "Faltu product", price: "1030", description: "this is really  a good product", productImage: "http//www.xyx.com" },
]
const HomeScreen = () => {
  const [data, setData] = useState(DATA)
  const handleRefresh = () => {
    setData([{ id: 4253, productName: "Faltu product", price: "1030", description: "this is really  a good product", productImage: "http//www.xyx.com" },])
  }
  return (
    <Container>
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