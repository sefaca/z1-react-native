import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

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
      <View style={styles.textContainer}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
        <Text style={styles.categoryTitle}>{categoryTitle}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'column',
    // flexWrap: 'wrap',
    // justifyContent: 'space-between',
    marginBottom: 10,
    marginLeft: 10,
    backgroundColor: '#5c276d',
    borderRadius: 8,
    width: '94%',
  },
  image: {
    width: '100%',
    // height: 100,
    // marginRight: 10,
    height: windowWidth * 0.5,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // resizeMode: 'cover',
  },
  textContainer: {
    // flex: 1,
    // padding: 10,
    flexDirection: 'column',
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#dfc17a',
    paddingLeft: 10,
    paddingTop: 5,
    // paddingBottom: 
  },
  title: {
    fontSize: 20,
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
