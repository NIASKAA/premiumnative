import React from 'react';
import "react-native-gesture-handler";
import { ApolloProvider } from '@apollo/client';
import { Container, Content, Text} from 'native-base';
import {HeaderNavi} from './components/Header'
import {Navigation} from './components/Footer'
import {client} from './apollo'
const App = () => {

  return (
    <ApolloProvider client={client}>
      <Container>
        <HeaderNavi/>
          <Content>
            <Text>
              This is Content Section
            </Text>
          </Content>
        <Navigation/>
      </Container>
    </ApolloProvider>
  );
};


export default App;
