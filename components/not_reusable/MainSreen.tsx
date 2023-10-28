// Archivo: PantallaPrincipal.tsx
import React, {useState} from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client'; // Importa useQuery
import { GET_ITEMS } from '../queries/queries'; // Importa la consulta
import HorizontalMenu from '../reusable/HorizontalMenu';
import ItemList from '../reusable/ItemList';
// import { Grid, Row, Col } from 'react-native-flexbox-grid';

const typesOfElements = ['All', 'Favorites', 'Harm Reduction', 'Integration', 'Mindfulness', 'Tripping'];

function MainScreen() {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const { loading, error, data } = useQuery(GET_ITEMS);

  if (loading) {
    // Muestra una pantalla de carga mientras se obtienen los datos
    return (
      <View style={mainScreenStyles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    // Maneja los errores, por ejemplo, muestra un mensaje de error
    return (
      <View style={mainScreenStyles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  // Si llegamos aquí, los datos se han cargado correctamente
  const items = data.items;

  const itemsPerRow = 2;

  const imageUrls = [
    'https://picsum.photos/640/360',
    'https://placebeard.it/640x360',
    'https://placekitten.com/640/360',
    'https://baconmockup.com/640/360',
    'https://placebear.com/640/360',
  ];

  const filteredItems = filter === 'All' ? items : items.filter(item => item.category.title === filter);

  return (
    <ScrollView style={mainScreenStyles.container}>
      <Text style={mainScreenStyles.title}>Learn</Text>
      <HorizontalMenu
        typesOfElements={typesOfElements}
        filter={filter}
        onFilterChange={handleFilterChange}
      />
      {filteredItems.map((item, index) => (
        <ItemList
          key={index} // Asegúrate de proporcionar una clave única
          image={imageUrls[index % imageUrls.length]}
          categoryTitle={item.category.title}
          title={item.title}
          author={item.author}
          isStartOfRow={index % itemsPerRow === 0}
        />
      ))}
    </ScrollView>
  );
}

const mainScreenStyles = {
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#2f054d',
    flexDirection: 'column',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
};

export default MainScreen;
