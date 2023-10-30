import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';


const ItemDetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    // <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {item && (
        <>
        <Text>{item.category.title}</Text>
        <Text>{item.title}</Text>
        <Text>{item.author}</Text>
        <Image source={{ uri: item.image }} style={{ width: '100%', height: 300 }} />
        <Text>{item.content}</Text>
        </>
        )}
      </View>
    // </ScrollView>
  );
};

export default ItemDetailScreen;
