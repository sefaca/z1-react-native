// Archivo: HorizontalMenu.tsx
import React from 'react';
import { ScrollView, View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface HorizontalMenuProps {
  typesOfElements: string[];
  filter: string;
  onFilterChange: (type: string) => void;
}

const HorizontalMenu: React.FC<HorizontalMenuProps> = ({ typesOfElements, filter, onFilterChange }) => {
  return (
    <ScrollView
    horizontal
    contentContainerStyle={styles.horizontalMenu}
    >
      {typesOfElements.map((type) => (
        <TouchableOpacity
          key={type}
          style={[
            styles.button,
            filter === type ? styles.activeButton : null,
          ]}
          onPress={() => onFilterChange(type)}
        >
          <Text
            style={[
              styles.buttonText,
              filter === type ? styles.activeButtonText : null,
            ]}
          >
            {type}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  horizontalMenu: {
    flexDirection: 'row',
    height: 60,
  },
  button: {
    padding: 10,
    fontSize: 16,
    margin: 10,
    cursor: 'pointer',
  },
  activeButton: {
    backgroundColor: '#b26ec1',
    color: 'white',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
  },
  activeButtonText: {
    color: 'white',
  },
});

export default HorizontalMenu;
