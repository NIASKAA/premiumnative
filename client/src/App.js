import React from 'react';
import "react-native-gesture-handler";
import {ApolloProvider } from '@apollo/client';
import { Provider } from "react-redux";
import {Container} from 'native-base';
import {client} from './apollo'
import Navigation from './navigation/Navigation';
import store from './utils/state/store'

const App = () => {

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Container>
            <Navigation/>
        </Container>
      </Provider>
    </ApolloProvider>
  );
};


export default App;
