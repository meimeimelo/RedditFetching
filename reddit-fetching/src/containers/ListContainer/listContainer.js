import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from '../../styles/styles'

export default class ListContainer extends Component {
  render(){
    return(
      <View style={styles.listContainer}>
        <Text>
          List View
        </Text>
      </View>
    )
  }
}
