import React from 'react';
import { Avatar, Card, Title, Paragraph, IconButton } from 'react-native-paper';
import styled from 'styled-components/native';
import { db } from '../backend/firebaseSetup';


const AppCard = ({ id, email, productName,
  description, price, deleteIcon, productImage }) => {

  const LeftAvatar = () =>
    (<Avatar.Image size={45} source={require("../assets/shop.png")} />)

  const handleDelete = (id) => {
    db.collection("products").doc(id).delete()
  }

  return (
    <CardContainer>
      {
        email && <Card.Title
          title={email} subtitle="Top rated seller🔥"
          left={LeftAvatar} />
      }
      {
        productImage && <Card.Cover source={require("../assets/shop.png")} />
      }
      <Card.Content>
        <Title numberOfLines={1}>{productName}</Title>
        <ActionContainer>
          <Title numberOfLines={1}>${price}  </Title>
          {
            deleteIcon && <IconButton
              icon="delete"
              color="#EF4444"
              size={30}
              onPress={() => handleDelete(id)}
            />
          }
        </ActionContainer>
        <Paragraph numberOfLines={2}>{description}</Paragraph>
      </Card.Content>
    </CardContainer>
  )
};

export default AppCard;
const CardContainer = styled(Card)`
margin: 5px;
background-color: #F3F4F6;
border-radius: 10px;
width: 350px;
`
const ActionContainer = styled.View`
flex-direction: row;
justify-content: space-between;
`