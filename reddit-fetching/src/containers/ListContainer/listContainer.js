import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from '../../styles/styles'
import ListView from '../../components/lists/list'

export default class ListContainer extends Component {
  render() {
    return(
      <View style={styles.listContainer}>
        <ListView />
      </View>
    )
  }
}
