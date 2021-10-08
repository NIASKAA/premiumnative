import React, {useEffect} from 'react';
import "react-native-gesture-handler";
import {ApolloProvider } from '@apollo/client';
import { Provider } from "react-redux";
import {Container} from 'native-base';
import {client} from './apollo'
import Navigation from './navigation/Navigation';
import store from './utils/state/store'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

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
