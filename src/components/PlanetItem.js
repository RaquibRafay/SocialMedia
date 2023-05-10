import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const PlanetItem = (props) => {
  const { image, name, desc } = props

  return (
    <TouchableOpacity onPress={() => alert(`You Clicked ${name}`)}>
      <View style={{ flexDirection: 'row', padding: 16, margin: 16, borderRadius: 20, backgroundColor: 'wheat', borderWidth: 1 }}>
        <Image style={{ width: 100, height: 100 }} source={image} />
        <View style={{ flex: 1, padding: 8, margin: 8 ,justifyContent: 'center' }} >
          <Text style={{ fontSize: 20,fontWeight:'bold' }} >
            {name}
          </Text>
          <Text>
            {desc}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default PlanetItem