import React from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, View } from 'native-base';

const CardImage = ({image, description}) => {
  return (
    <Container>
      <Header />
      <Content>
        <Card style={{flex: 0}}>
          <CardItem>
            <Body>
              <Image
                source={{uri: image}}
                style={{flex: 1,
                  height: 200,
                  width: '100%'
                }}
              />
              <Text
                style={{
                  marginTop: 16,
                  marginBottom: 16
                }}
              >
                { description }
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

export default CardImage;