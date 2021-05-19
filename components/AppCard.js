import React from 'react';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import styled from 'styled-components';


const AppCard = () => {
  const LeftAvatar = () =>
    (<Avatar.Image size={45} source={require("../assets/shop.png")} />)

  return (
    <CardContainer>
      <Card.Title
        title="Card Title" subtitle="Top rated seller"
        left={LeftAvatar} />
      <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      <Card.Content>
        <Title numberOfLines={1}>Card title</Title>
        <Paragraph numberOfLines={2}>Card content</Paragraph>
      </Card.Content>
    </CardContainer>
  )
};

export default AppCard;
const CardContainer = styled(Card)`
margin: 10px;
background-color: #F3F4F6;
border-radius: 10px;
`