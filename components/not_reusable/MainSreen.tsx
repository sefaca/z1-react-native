// Archivo: MainScreen.tsx
import React, {useState} from 'react';
import {Image, View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useQuery} from '@apollo/client'; // Importa useQuery
import {GET_ITEMS} from '../queries/queries'; // Importa la consulta
import HorizontalMenu from '../reusable/HorizontalMenu';
import ItemList from '../reusable/ItemList';

const typesOfElements = [
  'All',
  'Favorites',
  'Harm Reduction',
  'Integration',
  'Mindfulness',
  'Tripping',
];

function MainScreen({ navigation }) {
  const [filter, setFilter] = useState('All');

  const handleFilterChange = type => {
    setFilter(type);
  };

  const {loading, error, data} = useQuery(GET_ITEMS);

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

  const imageUrls = [];
  const imageCount = 40;

  for (let i = 0; i < imageCount; i++) {
    // Genera URLs únicas utilizando IDs diferentes o dimensiones distintas
    const imageUrl = `https://picsum.photos/id/${i}/200/300`; 
    imageUrls.push(imageUrl);
  }

  const filteredItems =
    filter === 'All'
      ? items
      : items.filter(item => item.category.title === filter);

  return (
    <View style={mainScreenStyles.container}>
      <ScrollView>
        <Text style={mainScreenStyles.title}>Learn</Text>
          <HorizontalMenu
            typesOfElements={typesOfElements}
            filter={filter}
            onFilterChange={handleFilterChange}
          />
            {filteredItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  console.log(item); // He agregado el console.log para verificar que me estaba devolviendo los datos de la api sin que me funcione la navegación de pantalla
                  navigation.navigate('ItemDetail', { id: item.id })
                }}
              >
              <ItemList
                key={index}
                image={imageUrls[index % imageUrls.length]}
                categoryTitle={item.category.title}
                title={item.title}
                author={item.author}
              />
              </TouchableOpacity>
            ))}
      </ScrollView>
    </View>
  );
}

// Estilos
const mainScreenStyles = {
  container: {
    flex: 1,
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
