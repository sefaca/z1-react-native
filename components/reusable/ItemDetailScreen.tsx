// Archivo ItemDetailScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';

const ItemDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { title, categoryTitle, author, image, content } = route.params; 

  // Modificar el encabezado de navegación
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: '#2f054d'},
      headerTitleStyle: { marginLeft: 20 },
      headerTintColor: 'white',
      headerTitle: '',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: 'white', marginLeft: 2, fontSize: 25 }}>X</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.categoryTitle}>{categoryTitle}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <Text style={styles.content}>{content}</Text>
    </ScrollView>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#2f054d"
  },
  categoryTitle: {
    fontSize: 18,
    padding: 10,
    paddingLeft: 22,
    paddingRight: 22,
    color: '#dfc17a',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
    paddingLeft: 22,
    paddingRight: 22,
    color: 'white'
  },
  author: {
    fontSize: 15,
    padding: 10,
    paddingLeft: 22,
    paddingRight: 22,
    color: 'white',
  },
  imageContainer: {
    alignItems: 'center',
    padding: 2,
  },
  image: {
    width: '100%',
    height: 280,
    borderRadius: 10,
    marginBottom: 10,
  },
  content: {
    fontSize: 14,
    lineHeight: 25,
    paddingLeft: 22,
    paddingRight: 22,
    paddingBottom: 35,
    color: 'white',
  }
});

export default ItemDetailScreen;

