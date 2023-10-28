/**
 * @format
 */

import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import MainScreen from './components/not_reusable/MainSreen'; // Ajusta la importación según la estructura de tu proyecto
import { AppRegistry } from "react-native";

AppRegistry.registerComponent('z1ReactNative', () => App);

const client = new ApolloClient({
  uri: 'https://tech.z1.digital/graphql', // URL de tu servidor GraphQL
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

