import React from 'react';
import "react-native-gesture-handler";
import {ApolloProvider } from '@apollo/client';
import {Container} from 'native-base';
import {client} from './apollo'
import Navigation from './navigation/Navigation';

const App = () => {

  return (
    <ApolloProvider client={client}>
      <Container>
          <Navigation/>
      </Container>
    </ApolloProvider>
  );
};


export default App;
