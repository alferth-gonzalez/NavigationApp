import React from 'react'
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { FlatList, Text, View } from 'react-native'
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import type { RootStackParams } from '../../routes/StackNavigator';

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

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={ globalStyles.container }>
      <Text style={{ marginBottom: 10, fontSize: 30 }}>Productos</Text>

      <FlatList 
        data={products}
        renderItem={ ({item}) => (
          <PrimaryButton
            onPress={ () => { navigation.navigate('Product', {id: item.id, name: item.name})} }
            label={ item.name }
          />
        )}
      />

      <Text style={{ marginBottom: 10, fontSize: 30 }}>Ajustes</Text>
      <PrimaryButton
        onPress={ () => { navigation.navigate('Settings') } }
        label="Ir a ajustes"
      />
    </View>

  )
}
