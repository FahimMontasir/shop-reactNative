import React from 'react';
import { Avatar, Card, Title, Paragraph, IconButton } from 'react-native-paper';
import styled from 'styled-components/native';


const AppCard = ({ id, userName, userImage, productName,
  description, price, productImage, deleteIcon }) => {

  const LeftAvatar = () =>
    (<Avatar.Image size={45} source={{ uri: userImage }} />)

  const handleDelete = (id) => {
    console.log(id)
  }

  return (
    <CardContainer>
      {
        userName && <Card.Title
          title={userName} subtitle="Top rated seller🔥"
          left={LeftAvatar} />
      }
      {
        productImage && <Card.Cover source={{ uri: productImage }} />
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