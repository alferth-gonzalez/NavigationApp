import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme/theme';

export const ProductScreen = () => {

  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const Navigation = useNavigation();

  useEffect(() => {
    Navigation.setOptions({
      title: params.name
    })
  }, [])

  return (
    <View style={ globalStyles.container }>
        <Text>ProductScreen</Text>
        <Text
          style={ {
            fontSize: 20,
            marginTop: 20,
            textAlign: 'center'
          }}
        >
          { params.id } - { params.name }
        </Text>
    </View>
  )
}
