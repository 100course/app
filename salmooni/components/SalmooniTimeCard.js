import React from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';


const SalmooniTimeCard = (props) => {

    //console.log(props);
    const {time} = props;

    return (
        <Container>
          <Header />
          <Content>
            <Card>
              <CardItem>
                <Body>
                  <Text>
                    start
                  </Text>
                  <Text>
                      {time.start}
                  </Text>
                  <Text>
                      end
                  </Text>
                  <Text>
                      {time.end}
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </Content>
        </Container>
      );

};

export default SalmooniTimeCard;