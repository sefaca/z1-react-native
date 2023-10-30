import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
    return (
        <View style={styles.container}>
            <Icon name="home" size={25} color="white" />
            <Icon name="shopping-cart" size={25} color="white" />
            <Icon name="tv" size={25} color="white" />
            <Icon name="download" size={25} color="white" />
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row', // Muestra los elementos en una fila
        justifyContent: 'space-around', // Espacio uniforme entre elementos
        backgroundColor: '#38104f', // Fondo negro
        padding: 5,
        position: 'absolute',
        bottom: 0, // Coloca el menú en la parte inferior de la pantalla
        width: '100%', // Ocupa todo el ancho de la pantalla
      },
      menuItem: {
        flex: 1, // Ocupa un espacio igual
        alignItems: 'center', // Centra el contenido horizontalmente
        padding: 0,
      },
      menuText: {
        color: 'white', // Texto en color blanco
      },
    });

export default Footer;
