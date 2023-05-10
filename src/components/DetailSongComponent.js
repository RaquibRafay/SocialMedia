import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const DetailSongComponent = (props) => {
  const { image, name, desc } = props

  return (
    <View style={styles.containerLuar}>

      <View style={styles.containerName}>
        <Text style={{paddingRight:20,paddingLeft:20}}>
          {name}
        </Text>
      </View>

      <Text>
        :
      </Text>

      <View style={styles.containerDesc}>
        <Text style={styles.styleDesc}>
          {desc}
        </Text>
      </View>

    </View>

  )
}
const styles = StyleSheet.create({
  containerLuar: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 8,
  },
  containerName: {
    flex: 1,
  },
  containerDesc: {
    flex: 3,
  },
  styleDesc: {
    textAlign:'justify'
  }
});

export default DetailSongComponent