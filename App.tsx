// Archivo: App.tsx
import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './components/not_reusable/MainSreen';
import ItemDetailScreen from './components/reusable/ItemDetailScreen';

const client = new ApolloClient({
  uri: 'https://tech.z1.digital/graphql', // URL del servidor GraphQL
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

const App = () => {
  return (
   <ApolloProvider client={client}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ItemDetail" 
          component={ItemDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
   </ApolloProvider>
  );
}

export default App;
