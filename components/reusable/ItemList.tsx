// Archivo: ItemList.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
interface ItemProps {
  image: string;
  categoryTitle: string;
  title: string;
  author: string;
  isStartOfRow: boolean;
}

const ItemList: React.FC<ItemProps> = ({ image, categoryTitle, title, author }) => {
  return (
    <View style={[styles.container]}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.textContainer}>
        <Text style={styles.categoryTitle}>{categoryTitle}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 10,
    backgroundColor: '#5c276d',
    borderRadius: 8,
    width: '94%',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    margin: 10,
  },
  textContainer: {
    flex: 1,
    padding: 5,
    flexDirection: 'column',
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#dfc17a',
    paddingLeft: 10,
    paddingTop: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 10,
  },
  author: {
    fontSize: 14,
    color: 'white',
    padding: 10,
  },
});

export default ItemList;
