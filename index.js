/**
 * @format
 */

import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import MainScreen from './components/not_reusable/MainSreen';
import { AppRegistry } from "react-native";

AppRegistry.registerComponent('z1ReactNative', () => App);

const client = new ApolloClient({
  uri: 'https://tech.z1.digital/graphql', // URL del servidor GraphQL
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <MainScreen />
    </ApolloProvider>
  );
};

export default App;

