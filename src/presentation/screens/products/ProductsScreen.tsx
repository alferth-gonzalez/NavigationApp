import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { FlatList, Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
  }
];

export const ProductsScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={ globalStyles.container }>
      <Text style={{ marginBottom: 10, fontSize: 30 }}>Productos</Text>

      <FlatList 
        data={products}
        renderItem={ ({item}) => (
          <PrimaryButton
            onPress={ () => { navigation.navigate('Product' as never)} }
            label={ item.name }
          />
        )}
      />

      <Text style={{ marginBottom: 10, fontSize: 30 }}>Ajustes</Text>
      <PrimaryButton
        onPress={ () => { navigation.navigate('Settings' as never) } }
        label="Ir a ajustes"
      />
    </View>

  )
}
