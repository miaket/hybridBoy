import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';

const CardImage = ({image, description}) => {
  return (

        <Card style={{flex: 0}}>
          <CardItem>
            <Body>
              <Image
                source={{uri: image}}
                style={{
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

  );
}

export default CardImage;